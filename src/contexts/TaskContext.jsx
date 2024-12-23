import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [priority, setPriority] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const savedPriority = JSON.parse(localStorage.getItem("priority")) || [];
    setPriority(savedPriority);
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
    const savedSchedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setSchedule(savedSchedule);
  }, []);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  useEffect(() => {
    const scheduleinterval = setInterval(() => {
      const updatedSchedule = schedule.map((sche) => {
        if (new Date(sche.dueDate) <= new Date() && sche.status !== "Overdue") {
          return { ...sche, status: "Overdue" };
        }
        return sche;
      });
      setSchedule(updatedSchedule);
    }, 60000);

    return () => clearInterval(scheduleinterval);
  }, [schedule]);

  const addSchedule = (sche) => {
    setSchedule([...schedule, sche]);
  };

  const deleteSchedule = (id) => {
    setSchedule(schedule.filter((sche) => sche.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        priority,
        addPriority,
        deletePriority,
        schedule,
        addSchedule,
        deleteSchedule,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
