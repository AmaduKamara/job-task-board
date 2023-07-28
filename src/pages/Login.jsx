import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 border border-gray-700 rounded-md p-6 text-slate-400">
        <h1 className="text-lg md:text-2xl text-slate-200 font-semibold">
          Log In
        </h1>
        <p>You can use any email and password to log in to your account</p>
        <form className="mt-6">
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
          <div className="flex justify-end items-center">
            <Link to="/" className="px-5 text-slate-200 text-sm">
              Cancel
            </Link>
            <Link
              to="/signup"
              className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
            >
              Sign Up
            </Link>
            <button
              disabled
              className="bg-gray-700 border py-2 px-5 border-gray-700 rounded-md text-sm"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
