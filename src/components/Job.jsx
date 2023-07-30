import { IoMdEyeOff } from "react-icons/io";
import { BiMoney, BiCalendar } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Job = ({ listing }) => {
  return (
    <div className="border border-gray-700 rounded-md p-6 text-slate-400">
      <div className="flex justify-between mb-1">
        <h2 className="text-slate-200">{listing.title}</h2>
        <div className="flex items-center space-x-2">
          <IoMdEyeOff />
          <AiOutlineHeart />
          <AiFillHeart />
        </div>
      </div>
      <p className="text-sm">{listing.companyName}</p>
      <p className="text-sm">{listing.location}</p>
      <div className="mt-1 mb-3">
        <div className="flex space-x-1">
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <BiMoney className="mr-1" /> ${listing.salary}
          </span>
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <BiCalendar className="mr-1" /> {listing.time}
          </span>
          <span className="bg-slate-800 rounded-full p-1 text-xs text-slate-200 font-semibold flex items-center">
            <LuGraduationCap className="mr-1" /> {listing.experience}
          </span>
        </div>
      </div>
      <p className="text-sm">{listing.shrotDescription}</p>
      <div className="flex justify-end mt-5">
        <button className="flex justify-end py-2 px-3 bg-slate-200 text-slate-800 text-sm rounded-md">
          View More
        </button>
      </div>
    </div>
  );
};

export default Job;
