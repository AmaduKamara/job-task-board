import { BiDotsHorizontalRounded, BiSolidEditAlt } from "react-icons/bi";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
import {
  MdCheckBoxOutlineBlank,
  // MdCheckBox,
  // MdPersonOutline,
} from "react-icons/md";

const Task = () => {
  return (
    <div className="py-3 px-4 flex justify-between border-b border-slate-400 rounded-b">
      <div>
        <p className="text-slate-300 flex items-center text-sm">Do Laundry</p>
      </div>
      <div>
        <p className="text-slate-300 flex items-center text-sm">
          <MdCheckBoxOutlineBlank size={14} className="mr-1" />{" "}
          <span>Todo</span>
        </p>
      </div>
      <div>
        <p className="text-slate-300 flex items-center text-sm">
          {" "}
          <HiOutlineArrowSmDown size={16} className="mr-1" /> <span>Low</span>
        </p>
      </div>
      <div>
        <p className="text-slate-300 flex items-center text-sm">
          <PiSuitcaseSimpleDuotone size={16} className="mr-1" />
          <span>Work</span>
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <BiSolidEditAlt
          className="hover:text-cyan-400 cursor-pointer"
          size={24}
        />
        <AiOutlineDelete
          className="hover:text-red-400 cursor-pointer"
          size={24}
        />
      </div>
    </div>
  );
};

export default Task;
