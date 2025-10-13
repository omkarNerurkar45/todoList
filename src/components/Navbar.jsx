import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-around text-md pt-9 bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-amber-50">
          <li className="cursor-pointer hover:font-bold">Home</li>
          <li className="cursor-pointer hover:font-bold">Your Tasks</li>
          <li className="cursor-pointer hover:font-bold">About</li>
          <li className=" flex  pr-10">
          <div className="cursor-pointer w-11 mx-2 h-6  bg-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-400
                      rounded-full peer-checked:bg-indigo-600 transition-colors duration-200 relative">
        <span
          className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow
                     transition-transform duration-200 peer-checked:translate-x-5"
        ></span>
      </div>Enable Dark Mode
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
