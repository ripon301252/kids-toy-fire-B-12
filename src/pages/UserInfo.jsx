import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL })
      .then(() =>{
        toast.success("Profile updated!")
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex justify-center items-center px-4 py-8">
      <title>KidsToy - My Profile</title>

      <div className="card w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-2 text-purple-600">
          My Profile
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Manage your <span className="text-blue-500 font-medium">KidsToy</span> account
        </p>

        {/* Profile Info */}
        <div className="text-center mb-6">
          {photoURL ? (
            <img
              src={photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover border-4 border-purple-300"
            />
          ) : (
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-500 shadow-inner">
              👤
            </div>
          )}
          
          <p className="text-gray-700 font-semibold mt-2">
            {name || "No Name Set"}
          </p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="label-text font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="label-text font-semibold">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold w-full hover:opacity-90"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
