import React from "react";
import { Link  } from "react-router";

const ToyCard = ({ singleToy }) => {
  console.log(singleToy)
 
  // const navigate = useNavigate();
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
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      {/* Thumbnail */}
      <img src={pictureURL} alt={toyName} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1 text-cyan-400">{toyName}</h2>
        <p className="text-sm text-gray-500 mb-1">Category: {subCategory}</p>
        <p className="text-sm text-gray-500 mb-1">Seller: {sellerName}</p>
        <p className="text-sm text-yellow-500 mb-1">Rating: {rating} ⭐</p>
        <p className="text-sm text-gray-600 mb-1">Available: {availableQuantity}</p>
        <p className="text-lg font-semibold text-pink-500 mb-3">${price}</p>

        {/* View More Button */}
        <Link to={`/toyDetails/${singleToy.toyId}`}
          className="btn btn-sm btn-pink w-full border-1 border-pink-600 bg-pink-600  hover:bg-pink-500"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
