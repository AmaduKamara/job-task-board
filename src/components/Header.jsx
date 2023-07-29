import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userData = await JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    };
    getUser();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="py-6 border-b bg-slate-900 border-slate-400 w-full fixed z-50">
      <div className="container mx-auto px-32 flex items-center justify-between">
        <h1>
          <Link to="/" className="text-white">
            JobTasks Bard
          </Link>
        </h1>

        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/" className="text-slate-100 text-sm">
                Job Listings
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="text-slate-100 text-sm">
                Task Board
              </Link>
            </li>
            {!user && (
              <li>
                <Link to="/login" className="text-slate-100 text-sm">
                  Login
                </Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  to="/login"
                  className="text-slate-100 flex items-center text-sm py-1 px-3 hover:bg-slate-800 rounded-md transition-all ease-in-out duration-300"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}
            {user && (
              <li className="text-gray-100 text-sm flex items-center space-x-2">
                <span>{user.email} </span>{" "}
                <span className="border p-2 rounded-full border-slate-700">
                  <FaUserAlt />
                </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
