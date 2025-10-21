import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">ToyTopia</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-pink-500 font-medium">My Profile</a>
          </li>
        </ul>

        {/* Login / User */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 font-medium">
            Login
          </a>

          <div className="relative group">
            <img
              src="https://i.ibb.co/VcGVnT16/boy2.jpg"
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              John Doe
            </span>
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-medium">
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">Home</a>
          <a href="#" className="block text-gray-700 hover:text-pink-500 font-medium">My Profile</a>
          <a href="#" className="block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 font-medium">Login</a>
          <div className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/VcGVnT16/boy2.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700 font-medium">John Doe</span>
          </div>
          <button className="block w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-medium">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
