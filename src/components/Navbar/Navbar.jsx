import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { links } from "../../utils/link";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = ({ toggleLeftNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user } = useContext(AuthContext);
  const menuLinks = links.map(({ label, path }) => (
    <li key={path}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-base-200 md:px-24">
      <div className="navbar-start gap-2 ">
        <div className="dropdown md:hidden">
          <button
            className="bg-red-100 btn-circle flex justify-center items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiOutlineX /> : <FaBars />}
          </button>
          {isMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuLinks}
            </ul>
          )}
        </div>
        <h2 className="font-bold text-md md:text-2xl ">Cuisine Route</h2>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="gap-5 menu-horizontal font-bold ">{menuLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <button className="btn btn-primary">Logout</button>
        ) : (
          <button className="btn btn-primary">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
