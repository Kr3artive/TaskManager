import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [priority, setPriority] = useState([]);
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const savedpriority = JSON.parse(localStorage.getItem("priority")) || [];
    setPriority(savedpriority);
  }, []);

  useEffect(() => {
    localStorage.setItem("priority", JSON.stringify(priority));
  }, [priority]);

  const addPriority = (prio) => {
    setPriority([...priority, prio]);
  };

  const deletePriority = (id) => {
    setPriority(priority.filter((prio) => prio.id !== id));
  };

  useEffect(() => {
    const savedschedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setPriority(savedschedule);
  }, []);

  useEffect(() => {
    localStorage.setItem("priority", JSON.stringify(schedule));
  }, [schedule]);

  const addSchedule = (sche) => {
    setSchedule([...schedule, sche]);
  };

  const deleteScehdule = (id) => {
    setPriority(schedule.filter((sche) => sche.id !== id));
  };

  return (
    <TaskContext.Provider value={{ priority, addPriority, deletePriority, schedule, addSchedule, deleteScehdule }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider
