import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !status || !category || !priority) return;

    const newTask = {
      id: uuidv4(),
      title,
      status,
      category,
      priority,
    };

    // Retrieve the existing listings array from localStorage or create an empty array if it doesn't exist
    const existingTasks = localStorage.getItem("tasks");
    const tasks = existingTasks ? JSON.parse(existingTasks) : [];

    // Append the new listing to the array
    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    setTitle("");
    setStatus("");
    setCategory("");
    setPriority("");

    navigate("/tasks");
  };

  return (
    <div className="py-32 h-screen">
      <h1 className="text-slate-200 text-lg md:text-3xl">New Task</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="status"
            >
              Status
            </label>
            <select
              type="text"
              id="status"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400 text-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option>Select option</option>
              <option selected value="Todo">
                Todo
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="category"
            >
              Category
            </label>
            <select
              type="text"
              id="category"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400 text-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option>Select option</option>
              <option selected value="Work">
                Work
              </option>
              <option value="Personal">Personal</option>
            </select>
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="priority"
            >
              Priority
            </label>
            <select
              type="text"
              id="priority"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400 text-lg"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option>Select option</option>
              <option value="High">High</option>
              <option selected value="Medium">
                Medium
              </option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex justify-end py-2 px-6 bg-slate-200 text-slate-800 text-sm rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
