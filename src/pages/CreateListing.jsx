import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { BiMoney, BiCalendar } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const CreateListing = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleShowPreview = () => {
    setShowPreview((prevState) => !prevState);
  };
  return (
    <div className="py-32 h-full">
      <h1 className="text-slate-200 text-lg md:text-3xl">New Listing</h1>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400"
            />
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400"
            />
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="applicationURL"
            >
              Application URL
            </label>
            <input
              type="text"
              id="applicationURL"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300 text-sm" htmlFor="time">
              Time
            </label>
            <select
              type="text"
              id="time"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400 text-lg"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="experience"
            >
              Experience
            </label>
            <select
              type="text"
              id="experience"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-5 text-slate-400 text-lg"
            >
              <option value="Junior">Junior</option>
              <option selected value="Mid-Level">
                Mid-Level
              </option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mr-4">
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="salary"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-1 text-slate-400"
            />
            <p className="mb-5 text-slate-400 text-sm">In USD</p>
          </div>

          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="shortDescription"
            >
              Short Description
            </label>
            <textarea
              id="shortDescription"
              minLength={3}
              maxLength={200}
              rows="5"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-1 text-slate-400"
            ></textarea>
            <p className="mb-5 text-slate-400 text-sm">Max 200 characcters</p>
          </div>
        </div>

        <div>
          <div>
            <label
              className="block mb-2 text-slate-300 text-sm"
              htmlFor="fullDescription"
            >
              Full Description
            </label>
            <textarea
              id="fullDescription"
              rows="5"
              className="bg-transparent border border-gray-600 rounded-md py-2 px-4 w-full mb-1 text-slate-400"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end items-center my-5">
          <button
            className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm"
            onClick={handleShowPreview}
          >
            Show Preview
          </button>
          <button
            disabled
            className="bg-gray-700 border py-2 px-5 border-gray-700 rounded-md text-sm"
          >
            Save
          </button>
        </div>

        {showPreview && (
          <div className="border border-gray-700 rounded-md p-6 text-slate-400 w-[400px]">
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
        )}
      </form>
    </div>
  );
};

export default CreateListing;
