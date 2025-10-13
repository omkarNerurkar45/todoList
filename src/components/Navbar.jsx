import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-around text-1 pt-9 bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-amber-50">
          <li className="cursor-pointer hover:font-bold">Home</li>
          <li className="cursor-pointer hover:font-bold">Your Tasks</li>
          <li className="cursor-pointer hover:font-bold">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
