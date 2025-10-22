import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import userImg from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => alert("Logged out successfully"))
      .catch((err) => alert(err.message));
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Website Name */}
      <div className="text-2xl font-bold text-pink-500">KidsToy</div>

      {/* Nav Links */}
      <ul className="flex gap-6 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-semibold" : "text-gray-700"
            }
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
          >
            My Profile
          </NavLink>
        </li>
      </ul>

      {/* Auth Section */}
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            {/* User Image with proper hover */}
            <div className="relative group">
              <img
                src={user?.photoURL || userImg}
                alt={user?.displayName || "User"}
                className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
              />
              {/* Only visible when hovering the image */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {user.displayName || "User"}
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="btn btn-sm border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/signin"
            className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
