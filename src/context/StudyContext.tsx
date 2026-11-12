'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  StudyFlowData,
  Subject,
  Unit,
  Topic,
  TodayTask,
  Priority,
  ActiveTab
} from '@/types/study';
import {
  INITIAL_STUDYFLOW_DATA,
  LOCAL_STORAGE_KEY
} from '@/lib/constants';
import {
  formatISODateKey,
  getUnitStats,
  getSubjectStats,
  triggerMilestoneConfetti
} from '@/lib/utils';
import { useToast } from './ToastContext';

interface StudyContextType {
  data: StudyFlowData;
  isLoaded: boolean;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedSubjectId: string | null;
  setSelectedSubjectId: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;

  // Topic Actions
  toggleTopic: (subjectId: string, unitId: string, topicId: string) => void;
  addTopic: (
    subjectId: string,
    unitId: string,
    topic: { name: string; priority: Priority; estimatedTime?: string }
  ) => void;
  editTopic: (
    subjectId: string,
    unitId: string,
    topicId: string,
    updates: Partial<Pick<Topic, 'name' | 'priority' | 'estimatedTime' | 'notes'>>
  ) => void;
  deleteTopic: (subjectId: string, unitId: string, topicId: string) => void;

  // Unit Actions
  addUnit: (subjectId: string, name: string) => void;
  renameUnit: (subjectId: string, unitId: string, name: string) => void;
  deleteUnit: (subjectId: string, unitId: string) => void;

  // Subject Actions
  addSubject: (name: string, code?: string, icon?: string) => void;
  deleteSubject: (subjectId: string) => void;

  // Today's Focus Actions
  addTopicToToday: (subjectId: string, unitId: string, topicId: string) => void;
  addCustomTodayTask: (title: string, priority: Priority, estimatedTime?: string) => void;
  toggleTodayTask: (taskId: string) => void;
  removeTodayTask: (taskId: string) => void;

  // Data & Reset Actions
  resetProgress: () => void;
  exportData: () => void;
  importData: (jsonString: string) => boolean;
  updateUserName: (name: string) => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<StudyFlowData>(INITIAL_STUDYFLOW_DATA);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as StudyFlowData;
        if (parsed.subjects && Array.isArray(parsed.subjects)) {
          setData(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load study data from LocalStorage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage whenever data changes
  const saveToStorage = useCallback((newData: StudyFlowData) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Failed to save to LocalStorage', e);
    }
  }, []);

  const updateStateAndPersist = useCallback(
    (updater: (prev: StudyFlowData) => StudyFlowData) => {
      setData(prev => {
        const next = updater(prev);
        const withTimestamp = {
          ...next,
          lastUpdated: new Date().toISOString()
        };
        saveToStorage(withTimestamp);
        return withTimestamp;
      });
    },
    [saveToStorage]
  );

  // Toggle topic completion
  const toggleTopic = useCallback(
    (subjectId: string, unitId: string, topicId: string) => {
      updateStateAndPersist(prev => {
        const todayKey = formatISODateKey();
        let targetTopicName = '';
        let targetSubjectName = '';
        let wasCompleted = false;

        const newSubjects = prev.subjects.map(subject => {
          if (subject.id !== subjectId) return subject;
          targetSubjectName = subject.name;

          const newUnits = subject.units.map(unit => {
            if (unit.id !== unitId) return unit;

            const newTopics = unit.topics.map(topic => {
              if (topic.id !== topicId) return topic;
              targetTopicName = topic.name;
              wasCompleted = !topic.completed;

              return {
                ...topic,
                completed: !topic.completed,
                completedAt: !topic.completed ? new Date().toISOString() : undefined
              };
            });

            return { ...unit, topics: newTopics };
          });

          return { ...subject, units: newUnits };
        });

        // Also update corresponding todayTask if present
        const newTodayTasks = prev.todayTasks.map(task => {
          if (task.topicId === topicId) {
            return { ...task, completed: wasCompleted };
          }
          return task;
        });

        // Update daily activity log
        const activityLogs = { ...prev.activityLogs };
        const todayLog = activityLogs[todayKey] || {
          date: todayKey,
          count: 0,
          topics: []
        };

        if (wasCompleted) {
          todayLog.count += 1;
          todayLog.topics.push({
            topicId,
            topicName: targetTopicName,
            subjectName: targetSubjectName,
            completedAt: new Date().toISOString()
          });
        } else {
          todayLog.count = Math.max(0, todayLog.count - 1);
          todayLog.topics = todayLog.topics.filter(t => t.topicId !== topicId);
        }
        activityLogs[todayKey] = todayLog;

        // Check if unit or subject hit 100%
        const updatedSubject = newSubjects.find(s => s.id === subjectId);
        if (updatedSubject) {
          const updatedUnit = updatedSubject.units.find(u => u.id === unitId);
          if (updatedUnit && getUnitStats(updatedUnit).percentage === 100 && wasCompleted) {
            triggerMilestoneConfetti();
          } else if (getSubjectStats(updatedSubject).percentage === 100 && wasCompleted) {
            triggerMilestoneConfetti();
          }
        }

        return {
          ...prev,
          subjects: newSubjects,
          todayTasks: newTodayTasks,
          activityLogs
        };
      });

      toast('Status updated');
    },
    [updateStateAndPersist, toast]
  );

  // Add topic to unit
  const addTopic = useCallback(
    (
      subjectId: string,
      unitId: string,
      topic: { name: string; priority: Priority; estimatedTime?: string }
    ) => {
      const newTopic: Topic = {
        id: `topic-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        name: topic.name.trim(),
        completed: false,
        priority: topic.priority,
        estimatedTime: topic.estimatedTime?.trim() || undefined
      };

      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          return {
            ...s,
            units: s.units.map(u => {
              if (u.id !== unitId) return u;
              return { ...u, topics: [...u.topics, newTopic] };
            })
          };
        })
      }));

      toast('Topic added successfully');
    },
    [updateStateAndPersist, toast]
  );

  // Edit topic
  const editTopic = useCallback(
    (
      subjectId: string,
      unitId: string,
      topicId: string,
      updates: Partial<Pick<Topic, 'name' | 'priority' | 'estimatedTime' | 'notes'>>
    ) => {
      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          return {
            ...s,
            units: s.units.map(u => {
              if (u.id !== unitId) return u;
              return {
                ...u,
                topics: u.topics.map(t => {
                  if (t.id !== topicId) return t;
                  return { ...t, ...updates };
                })
              };
            })
          };
        }),
        todayTasks: prev.todayTasks.map(task => {
          if (task.topicId === topicId) {
            return {
              ...task,
              title: updates.name || task.title,
              priority: updates.priority || task.priority,
              estimatedTime: updates.estimatedTime !== undefined ? updates.estimatedTime : task.estimatedTime
            };
          }
          return task;
        })
      }));

      toast('Topic updated');
    },
    [updateStateAndPersist, toast]
  );

  // Delete topic
  const deleteTopic = useCallback(
    (subjectId: string, unitId: string, topicId: string) => {
      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          return {
            ...s,
            units: s.units.map(u => {
              if (u.id !== unitId) return u;
              return {
                ...u,
                topics: u.topics.filter(t => t.id !== topicId)
              };
            })
          };
        }),
        todayTasks: prev.todayTasks.filter(task => task.topicId !== topicId)
      }));

      toast('Topic deleted', 'info');
    },
    [updateStateAndPersist, toast]
  );

  // Add unit
  const addUnit = useCallback(
    (subjectId: string, name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;

      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          const newUnit: Unit = {
            id: `unit-${Date.now()}`,
            name: trimmed,
            order: s.units.length + 1,
            topics: []
          };
          return { ...s, units: [...s.units, newUnit] };
        })
      }));

      toast('Unit created');
    },
    [updateStateAndPersist, toast]
  );

  // Rename unit
  const renameUnit = useCallback(
    (subjectId: string, unitId: string, name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;

      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          return {
            ...s,
            units: s.units.map(u => {
              if (u.id !== unitId) return u;
              return { ...u, name: trimmed };
            })
          };
        })
      }));

      toast('Unit renamed');
    },
    [updateStateAndPersist, toast]
  );

  // Delete unit
  const deleteUnit = useCallback(
    (subjectId: string, unitId: string) => {
      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.map(s => {
          if (s.id !== subjectId) return s;
          return {
            ...s,
            units: s.units.filter(u => u.id !== unitId)
          };
        }),
        todayTasks: prev.todayTasks.filter(t => t.unitId !== unitId)
      }));

      toast('Unit deleted', 'info');
    },
    [updateStateAndPersist, toast]
  );

  // Add subject
  const addSubject = useCallback(
    (name: string, code?: string, icon: string = 'book-open') => {
      const trimmedName = name.trim();
      if (!trimmedName) return;

      const newSubject: Subject = {
        id: `subj-${Date.now()}`,
        name: trimmedName,
        code: code?.trim() || undefined,
        icon: icon || 'book-open',
        units: []
      };

      updateStateAndPersist(prev => ({
        ...prev,
        subjects: [...prev.subjects, newSubject]
      }));

      toast(`Subject "${trimmedName}" created`);
    },
    [updateStateAndPersist, toast]
  );

  // Delete subject
  const deleteSubject = useCallback(
    (subjectId: string) => {
      updateStateAndPersist(prev => ({
        ...prev,
        subjects: prev.subjects.filter(s => s.id !== subjectId),
        todayTasks: prev.todayTasks.filter(t => t.subjectId !== subjectId)
      }));

      if (selectedSubjectId === subjectId) {
        setSelectedSubjectId(null);
      }

      toast('Subject deleted', 'info');
    },
    [updateStateAndPersist, selectedSubjectId, toast]
  );

  // Add topic to today's focus
  const addTopicToToday = useCallback(
    (subjectId: string, unitId: string, topicId: string) => {
      updateStateAndPersist(prev => {
        // Avoid duplicate
        if (prev.todayTasks.some(t => t.topicId === topicId)) {
          return prev;
        }

        const subject = prev.subjects.find(s => s.id === subjectId);
        const unit = subject?.units.find(u => u.id === unitId);
        const topic = unit?.topics.find(t => t.id === topicId);

        if (!topic) return prev;

        const newTask: TodayTask = {
          id: `today-${Date.now()}`,
          topicId,
          subjectId,
          unitId,
          title: topic.name,
          subjectName: subject?.name,
          completed: topic.completed,
          priority: topic.priority,
          estimatedTime: topic.estimatedTime,
          addedAt: new Date().toISOString()
        };

        return {
          ...prev,
          todayTasks: [...prev.todayTasks, newTask]
        };
      });

      toast("Added to Today's Focus");
    },
    [updateStateAndPersist, toast]
  );

  // Add standalone custom task to today
  const addCustomTodayTask = useCallback(
    (title: string, priority: Priority, estimatedTime?: string) => {
      const trimmed = title.trim();
      if (!trimmed) return;

      const newTask: TodayTask = {
        id: `today-custom-${Date.now()}`,
        title: trimmed,
        completed: false,
        priority,
        estimatedTime: estimatedTime?.trim() || undefined,
        addedAt: new Date().toISOString()
      };

      updateStateAndPersist(prev => ({
        ...prev,
        todayTasks: [...prev.todayTasks, newTask]
      }));

      toast("Task added to Today's Focus");
    },
    [updateStateAndPersist, toast]
  );

  // Toggle today task
  const toggleTodayTask = useCallback(
    (taskId: string) => {
      updateStateAndPersist(prev => {
        const task = prev.todayTasks.find(t => t.id === taskId);
        if (!task) return prev;

        const willBeCompleted = !task.completed;

        // If linked to a syllabus topic, also toggle that topic!
        let newSubjects = prev.subjects;
        if (task.subjectId && task.unitId && task.topicId) {
          const sId = task.subjectId;
          const uId = task.unitId;
          const tId = task.topicId;

          newSubjects = prev.subjects.map(s => {
            if (s.id !== sId) return s;
            return {
              ...s,
              units: s.units.map(u => {
                if (u.id !== uId) return u;
                return {
                  ...u,
                  topics: u.topics.map(t => {
                    if (t.id !== tId) return t;
                    return {
                      ...t,
                      completed: willBeCompleted,
                      completedAt: willBeCompleted ? new Date().toISOString() : undefined
                    };
                  })
                };
              })
            };
          });
        }

        const newTasks = prev.todayTasks.map(t => {
          if (t.id !== taskId) return t;
          return { ...t, completed: willBeCompleted };
        });

        // Activity log
        const todayKey = formatISODateKey();
        const activityLogs = { ...prev.activityLogs };
        const todayLog = activityLogs[todayKey] || {
          date: todayKey,
          count: 0,
          topics: []
        };

        if (willBeCompleted) {
          todayLog.count += 1;
          todayLog.topics.push({
            topicId: task.topicId || taskId,
            topicName: task.title,
            subjectName: task.subjectName || 'Today Focus',
            completedAt: new Date().toISOString()
          });
        } else {
          todayLog.count = Math.max(0, todayLog.count - 1);
          todayLog.topics = todayLog.topics.filter(
            t => t.topicId !== (task.topicId || taskId)
          );
        }
        activityLogs[todayKey] = todayLog;

        return {
          ...prev,
          subjects: newSubjects,
          todayTasks: newTasks,
          activityLogs
        };
      });

      toast('Task updated');
    },
    [updateStateAndPersist, toast]
  );

  // Remove task from today without deleting syllabus topic
  const removeTodayTask = useCallback(
    (taskId: string) => {
      updateStateAndPersist(prev => ({
        ...prev,
        todayTasks: prev.todayTasks.filter(t => t.id !== taskId)
      }));

      toast("Removed from Today's list", 'info');
    },
    [updateStateAndPersist, toast]
  );

  // Reset progress (keeps subjects and units intact, clears completion & today's list)
  const resetProgress = useCallback(() => {
    updateStateAndPersist(prev => ({
      ...prev,
      subjects: prev.subjects.map(s => ({
        ...s,
        units: s.units.map(u => ({
          ...u,
          topics: u.topics.map(t => ({
            ...t,
            completed: false,
            completedAt: undefined
          }))
        }))
      })),
      todayTasks: [],
      activityLogs: {}
    }));

    toast('All study progress has been reset', 'info');
  }, [updateStateAndPersist, toast]);

  // Export JSON
  const exportData = useCallback(() => {
    try {
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `studyflow-backup-${formatISODateKey()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast('Progress exported as JSON');
    } catch {
      toast('Failed to export data', 'error');
    }
  }, [data, toast]);

  // Import JSON
  const importData = useCallback(
    (jsonString: string): boolean => {
      try {
        const parsed = JSON.parse(jsonString) as StudyFlowData;
        if (!parsed.subjects || !Array.isArray(parsed.subjects)) {
          throw new Error('Invalid StudyFlow schema');
        }
        updateStateAndPersist(() => parsed);
        toast('Backup restored successfully');
        return true;
      } catch {
        toast('Invalid backup file. Please check format.', 'error');
        return false;
      }
    },
    [updateStateAndPersist, toast]
  );

  // Update user name
  const updateUserName = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      updateStateAndPersist(prev => ({
        ...prev,
        user: { ...prev.user, name: trimmed }
      }));
      toast('Name updated');
    },
    [updateStateAndPersist, toast]
  );

  return (
    <StudyContext.Provider
      value={{
        data,
        isLoaded,
        activeTab,
        setActiveTab,
        selectedSubjectId,
        setSelectedSubjectId,
        searchQuery,
        setSearchQuery,
        toggleTopic,
        addTopic,
        editTopic,
        deleteTopic,
        addUnit,
        renameUnit,
        deleteUnit,
        addSubject,
        deleteSubject,
        addTopicToToday,
        addCustomTodayTask,
        toggleTodayTask,
        removeTodayTask,
        resetProgress,
        exportData,
        importData,
        updateUserName
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
}

