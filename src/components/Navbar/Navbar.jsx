import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { CiDark, CiLight } from "react-icons/ci";
import { links } from "../../utils/link";
import { AuthContext } from "../../context/AuthProvider";
import { themeChange } from "theme-change";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user, handleSignOut } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {};
  const [isDarkMode, setIsDarkMode] = useState(false);

  const tooltip = displayName || email;
  const menuLinks = links.map(({ label, path }) => (
    <li key={path}>
      <NavLink to={path}>{label}</NavLink>
    </li>
  ));
  useEffect(() => {
    themeChange(false);
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkMode.matches);
  }, []);

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
        <Link to="/">
          <h2 className="font-bold text-md md:text-2xl cursor-pointer ">
            Cuisine Route
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="gap-5 menu-horizontal font-bold ">{menuLinks}</ul>
      </div>
      <div className="navbar-end  flex items-center gap-2">
        <div>
          {isDarkMode ? (
            <button
              className="btn-circle transition duration-400 transform rotate-45"
              data-set-theme="light"
            >
              <CiLight
                className="w-8 h-8"
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            </button>
          ) : (
            <button className="btn-circle transition duration-400 " data-set-theme="dark">
              <CiDark
                className="w-8 h-8 "
                onClick={() => setIsDarkMode(!isDarkMode)}
              />
            </button>
          )}
        </div>
        {user ? (
          <div className="flex gap-1 md:gap-4 items-center">
            <abbr title={tooltip}>
              <div className="rounded-full border border-black w-8 h-8 md:w-12 md:h-12 cursor-pointer flex justify-center items-center ">
                {photoURL ? (
                  <img className="rounded-full" src={photoURL} alt="" />
                ) : (
                  <FaUser className="w-6 h-6 md:w-8 md:h-8 " />
                )}
              </div>
            </abbr>
            <button
              onClick={handleSignOut}
              className="btn btn-primary btn-sm md:btn-md "
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
