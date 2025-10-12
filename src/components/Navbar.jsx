import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <ul className="flex justify-around text-md p-3.5 bg-slate-800 text-amber-50">
          <li className="cursor-pointer hover:font-bold">Home</li>
          <li className="cursor-pointer hover:font-bold">Your Tasks</li>
          <li className="cursor-pointer hover:font-bold">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
