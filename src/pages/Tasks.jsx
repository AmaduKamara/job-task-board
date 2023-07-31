import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Task from "../components/Task";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userData = await JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    };
    getUser();
  }, [navigate]);

  const addTask = () => {
    if (user) navigate("/new-task");
  };

  return (
    <div className="py-32 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-200 text-lg md:text-3xl">Tasks</h1>
        <button
          disabled={!user}
          className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
          onClick={addTask}
        >
          {user ? "Add Task" : "Login to add task"}
        </button>
      </div>

      <div className="rounded-md border border-slate-500 text-slate-400 mt-6">
        <div className="py-3 px-4 flex justify-between border-b border-slate-400">
          <button className="text-slate-500 flex items-center text-sm py-1 px-3 hover:bg-slate-800 rounded-md transition-all ease-in-out duration-300">
            Title
            <span className="ml-2">
              <MdKeyboardArrowUp size={14} />
              <MdOutlineKeyboardArrowDown className="-mt-2" size={14} />
            </span>
          </button>
          <button className="text-slate-500 flex items-center text-sm py-1 px-3 hover:bg-slate-800 rounded-md transition-all ease-in-out duration-300">
            Status
            <span className="ml-2">
              <MdKeyboardArrowUp size={14} />
              <MdOutlineKeyboardArrowDown className="-mt-2" size={14} />
            </span>
          </button>
          <button className="text-slate-500 flex items-center text-sm py-1 px-3 hover:bg-slate-800 rounded-md transition-all ease-in-out duration-300">
            Priority
            <span className="ml-2">
              <MdKeyboardArrowUp size={14} />
              <MdOutlineKeyboardArrowDown className="-mt-2" size={14} />
            </span>
          </button>
          <button className="text-slate-500 flex items-center text-sm py-1 px-3 hover:bg-slate-800 rounded-md transition-all ease-in-out duration-300">
            Category
            <span className="ml-2">
              <MdKeyboardArrowUp size={14} />
              <MdOutlineKeyboardArrowDown className="-mt-2" size={14} />
            </span>
          </button>
          <div></div>
        </div>

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
