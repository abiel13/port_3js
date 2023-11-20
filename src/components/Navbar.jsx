import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="w-15 h-15 bg-white p-3 flex items-center justify-center shadow-md rounded-lg "
      >
        <p className="blue-gradient_text font-bold">A.A</p>
      </NavLink>
      <nav className="flex text-lg gap-7 capitalize  font-bold">
        {["about", "projects"].map((item, i) => (
          <NavLink
            key={i}
            to={`/${item}`}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
