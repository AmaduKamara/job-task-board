import { IoMdEyeOff } from "react-icons/io";
import { BiMoney, BiCalendar } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Job = () => {
  return (
    <div className="border border-gray-700 rounded-md p-6 text-slate-400">
      <div className="flex justify-between mb-1">
        <h2 className="text-slate-200">Senior Web Developer</h2>
        <div className="flex items-center space-x-2">
          <IoMdEyeOff />
          <AiOutlineHeart />
          <AiFillHeart />
        </div>
      </div>
      <p className="text-sm">Google</p>
      <p className="text-sm">Remote</p>
      <div className="mt-1 mb-3">
        <div className="flex space-x-1">
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <BiMoney className="mr-1" /> $200,000
          </span>
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <BiCalendar className="mr-1" /> Full Time
          </span>
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <LuGraduationCap className="mr-1" /> Senior
          </span>
        </div>
      </div>
      <p className="text-sm">
        We are looking for a dedicated senior web developer
      </p>
      <div className="flex justify-end mt-5">
        <button className="flex justify-end py-2 px-3 bg-slate-200 text-slate-800 text-sm rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};

export default Job;
