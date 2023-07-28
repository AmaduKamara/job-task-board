import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 border border-gray-700 rounded-md p-6 text-slate-400">
        <h1 className="text-lg md:text-2xl text-slate-200 font-semibold">
          Sign Up
        </h1>
        <p>You do not need to create account but it's fine if you want to!</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <label className="block mb-2 text-slate-300 text-sm" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5"
          />
          <label
            className="block mb-2 text-slate-300 text-sm"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5"
          />
          <label
            className="block mb-2 text-slate-300 text-sm"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5"
          />
          <div className="flex justify-end items-center">
            <Link to="/" className="px-5 text-slate-200 text-sm">
              Cancel
            </Link>
            <Link
              to="/login"
              className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
            >
              Login
            </Link>
            <button
              disabled
              className="bg-gray-700 border py-2 px-5 border-gray-700 rounded-md text-sm"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
