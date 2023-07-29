import { useNavigate } from "react-router-dom";
import Job from "../components/Job";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userData = await JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    };
    getUser();
  }, [navigate]);

  const addListing = () => {
    if (user) navigate("/create-listing");
  };

  return (
    <div className="py-32 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-200 text-lg md:text-3xl">Job Listings</h1>
        <button
          disabled={!user}
          className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
          onClick={addListing}
        >
          {user ? "Create Listing" : "Login to create listing"}
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </div>
  );
};

export default Jobs;
