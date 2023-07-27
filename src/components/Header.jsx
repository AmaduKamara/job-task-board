import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 border-b border-slate-100">
      <div className="container mx-auto px-16 flex items-center justify-between">
        <h1>
          <Link to="/" className="text-white">
            JobTasks Bard
          </Link>
        </h1>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-100 text-sm">
                Job Listings
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="text-gray-100 text-sm">
                Task Board
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-100 text-sm">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
