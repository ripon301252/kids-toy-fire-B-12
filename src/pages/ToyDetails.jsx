import { toast } from "react-toastify";
import { useToy } from "../Hook/usetoy";
import { useParams } from "react-router";

const ToyDetails = () => {
  const { toys } = useToy();
  const { id } = useParams();
  const toyData = toys.find((t) => t.toyId === Number(id));

  const {
    toyName,
    subCategory,
    sellerName,
    rating,
    price,
    availableQuantity,
    pictureURL,
    description,
  } = toyData || {};

  const handleTryNow = (e) => {
    e.preventDefault();
    toast.success("You are Success");
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <title>KidsToy - Toy Details</title>
      {/* Toy Details Card */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Thumbnail */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-4">
          <img
            src={pictureURL}
            alt={toyName}
            className="object-cover rounded-lg w-full h-64 md:h-80"
          />
        </div>

        {/* Card Body */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">{toyName}</h2>
            <p className="text-gray-500 mb-1"><span className="font-semibold">Category:</span> {subCategory}</p>
            <p className="text-gray-500 mb-1"><span className="font-semibold">Seller:</span> {sellerName}</p>
            <p className="text-yellow-500 mb-1"><span className="font-semibold">Rating:</span> {rating} ⭐</p>
            <p className="text-gray-600 mb-1"><span className="font-semibold">Available:</span> {availableQuantity}</p>
            <p className="text-pink-500 text-xl font-semibold mb-3">${price}</p>
            <p className="text-gray-700"><span className="font-bold">Description:</span> {description}</p>
          </div>
        </div>
      </div>

      {/* Try Now Form */}
      <div className="flex justify-center">
        <div className="card bg-white w-full max-w-md shadow-xl rounded-xl p-6">
          <form onSubmit={handleTryNow} className="space-y-4">
            <h1 className="text-2xl text-black font-bold text-center mb-2">Try Now</h1>

            {/* Name */}
            <div className="flex flex-col">
              <label className="label text-black font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full rounded-lg px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="label text-black font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full rounded-lg px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Try Now Button */}
            <button
              type="submit"
              className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 rounded-lg transition duration-300 border-none"
            >
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
