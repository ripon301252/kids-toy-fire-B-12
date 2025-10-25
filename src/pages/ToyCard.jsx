import React from "react";
import { Link  } from "react-router";
import { MdOutlineStar } from "react-icons/md";

const ToyCard = ({ singleToy }) => {
  console.log(singleToy)
 
  const {
    toyName,
    subCategory,
    sellerName,
    rating,
    price,
    availableQuantity,
    pictureURL,
  } = singleToy || {};


  return (
    <div className="card backdrop-blur-lg bg-white/10  shadow-md rounded-lg overflow-hidden hover:scale-102 transition-transform border-1 border-gray-300">
      {/* Thumbnail */}
      <img src={pictureURL} alt={toyName} className="w-full h-48 object-cover" />

      {/* Card */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1 text-cyan-400">{toyName}</h2>
        <p className="text-sm text-white mb-1">Category: {subCategory}</p>
        <p className="text-sm text-white mb-1">Seller: {sellerName}</p>
        <p className="text-sm text-yellow-300 mb-1 flex items-center gap-1">Rating: {rating} <span className=""><MdOutlineStar className="text-lg" /></span></p>
        <p className="text-sm text-white mb-1">Available: {availableQuantity}</p>
        <p className="text-lg font-semibold text-pink-300 mb-3">${price}</p>

        {/* View More Button */}
        <Link to={`/toyDetails/${singleToy.toyId}`}
          className="btn btn-sm btn-pink w-full text-white border-1 border-pink-600 bg-pink-600  hover:bg-pink-500 shadow-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
