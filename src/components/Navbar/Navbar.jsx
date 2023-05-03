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
  const { user, handleSignOut } = useContext(AuthContext);
  const { displayName, email, photoURL } = user || {}
  
  const tooltip = displayName || email;
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
          <div className="flex gap-1 items-center">
            <abbr title={tooltip}>
              <div className="rounded-full border border-black w-14 h-14 cursor-pointer flex justify-center items-center">
              {photoURL ? (
                <img className="rounded-full" src={photoURL} alt=""  />
                ) : (
                  <FaUser className="w-10 h-10 " />
                )}
              </div>
            </abbr>
            <button onClick={handleSignOut} className="btn btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Login</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
