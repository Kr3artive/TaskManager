import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const PriorityCard = () => {
  const { schedule, deleteScehdule } = useContext(TaskContext);
  return (
    <div className="bg-purple-100 p-2 rounded-lg">
      <h1 className="text-xl font-bold text-purple-900 mb-6">
        Scheduled Task
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {schedule.length > 0 ? (
          schedule.map((sche) => (
            <div
              key={sche.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {sche.title}
              </h2>
              <p className="text-gray-600 mb-4">{sche.content}</p>
              <h1>Due Date: {sche.date}</h1>
            </div>
          ))
        ) : (
          <p className="text-center text-black col-span-full">
            No Scheduled Task.
          </p>
        )}
      </div>
    </div>
  );
};

export default PriorityCard;