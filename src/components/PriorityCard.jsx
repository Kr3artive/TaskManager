import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const PriorityCard = () => {
  const { priority, deletePriority } = useContext(TaskContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleDeleteClick = (prioId) => {
    setTaskToDelete(prioId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deletePriority(taskToDelete);
    }
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-purple-200 p-2 mb-10 rounded-lg">
      <h1 className="text-3xl font-bold text-purple-900 mb-6">Priorities</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {priority.length > 0 ? (
          priority.map((prio) => (
            <div
              key={prio.id}
              className="bg-white flex items-center justify-between shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <h2 className="text-xl font-bold text-black mb-2">
                  {prio.title}
                </h2>
                <p className="text-black mb-4">{prio.content}</p>
              </div>
              <input
                type="checkbox"
                onClick={() => handleDeleteClick(prio.id)}
                className="bg-red-500 text-white w-8 h-8 rounded hover:bg-red-600 transition-all duration-200"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-black col-span-full">
            No priority available.
          </p>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-center text-black mb-4">
              Are you done with this task?
            </h2>
            <div className="flex justify-around">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-200"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-black text-white px-4 py-2 rounded transition-all duration-200"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriorityCard;
