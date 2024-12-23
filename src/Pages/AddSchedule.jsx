import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { useNavigate } from "react-router-dom";

const AddSchedule = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const { addSchedule } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = { id: Date.now(), title, content, date };
    addSchedule(newSchedule);
    navigate("/home");
  };

  return (
    <div className="flex p-2 justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-900">
          Schedule A Task
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">
            Content
          </label>
          <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 resize-none"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black">Due Date</label>
          <input
            type="date"
            placeholder="Due Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-all duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddSchedule;
