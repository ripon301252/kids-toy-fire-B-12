import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userImg from "../assets/user.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully")
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  return (
    <nav className="bg-white shadow-md px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Website Name */}
        <div className="text-2xl font-bold text-pink-500">KidsToy</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) =>
                `font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-pink-500 font-semibold"
                    : "text-gray-700 hover:text-pink-500"
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>

        {/* Auth Section Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL || userImg}
                  alt={user?.displayName || "User"}
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {user.displayName || "User"}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-gradient-to-l border-pink-500 from-pink-500 to-red-500  text-white transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              className="btn btn-sm bg-gradient-to-l border-pink-500 from-pink-500 to-red-500  text-white"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            {open ? (
              <IoCloseSharp size={25} className="text-pink-500" />
            ) : (
              <GiHamburgerMenu size={25} className="text-pink-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          open ? "max-h-screen mt-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-700"
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-semibold" : "text-gray-700"
              }
              onClick={() => setOpen(false)}
            >
              My Profile
            </NavLink>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="btn btn-sm bg-gradient-to-l border-pink-500 from-pink-500 to-red-500 hover:bg-pink-500 text-white w-full"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="btn btn-sm bg-gradient-to-l border-pink-500 from-pink-500 to-red-500 hover:bg-pink-700 text-white w-full"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
