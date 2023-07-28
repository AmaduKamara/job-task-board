import { Link } from "react-router-dom";
import Job from "../components/Job";

const Jobs = () => {
  return (
    <div className="py-32 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-slate-200 text-lg md:text-3xl">Job Listings</h1>
        <Link
          to="/create-listing"
          className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
        >
          Create Listing
        </Link>
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
