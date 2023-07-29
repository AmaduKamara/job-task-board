import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
     const newUser = {
       email,
       password,
     };

     localStorage.setItem("user", JSON.stringify(newUser));

     setEmail("");
     setPassword("");

     navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 border border-gray-700 rounded-md p-6 text-slate-400">
        <h1 className="text-lg md:text-2xl text-slate-200 font-semibold">
          Log In
        </h1>
        <p>You can use any email and password to log in to your account</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <label className="block mb-2 text-slate-300 text-sm" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="py-2 mb-3 text-sm text-red-300">{error}</p>}
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
              disabled={!email && !password}
              className={`${
                !email ||
                !password
                  ? "bg-gray-700  border py-2 px-5 border-gray-700 rounded-md text-sm text-slate-600"
                  : "bg-slate-100 text-slate-800 border py-2 px-5 border-gray-700 rounded-md text-sm"
              }`}
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
