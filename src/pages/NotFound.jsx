import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-slate-400 flex flex-col items-center w-[400px] border p-16 rounded-md border-slate-600">
        <TbError404 size={100} className="my-3" />
        <h1 className="text-slate-200 text-lg md:text-2xl mb-2">Oops...</h1>
        <p>You seem lost</p>
        <Link
          to="/"
          className="border py-2 px-5 border-gray-700 mr-2 rounded-md text-slate-200 text-sm mt-5"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
