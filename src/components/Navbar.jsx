import React, { useState } from "react";
import About from "./About";


const Navbar = () => {
  const [page, setPage] = useState("Home")
  return (
    <div>
      <div>
        <ul className="flex justify-around text-1 pt-9 bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 text-amber-50">
          <li className="cursor-pointer hover:hover:font-semibold transition-all">Home</li>
          <li className="cursor-pointer hover:hover:font-semibold transition-all">Your Tasks</li>
          <li className="cursor-pointer hover:hover:font-semibold transition-all">{page === "about" && <About/>}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
