import React from "react";
import { Link } from "react-router";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-100 via-white to-gray-100 text-center px-4">
      <h1 className="text-[120px] md:text-[150px] font-extrabold text-pink-500 leading-none drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-3 text-base md:text-lg max-w-md">
        Sorry, the page you’re looking for doesn’t exist or might have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
      >
         <FaLongArrowAltLeft /> Back to Home
      </Link>

      <div className="absolute bottom-5 text-sm text-gray-400">
        © {new Date().getFullYear()} ToyTopia. All rights reserved.
      </div>
    </div>
  );
};

export default Error;
