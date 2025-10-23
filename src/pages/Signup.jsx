import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Signup = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [nameerror, setNameError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess(false);

    const length6Pattern = /^.{6,}$/;
    const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!length6Pattern.test(password)) {
      setError("Password must be 6 characters or longer");
      toast.error("Password must be 6 characters or longer");
      return;
    } else if (!casePattern.test(password)) {
      setError(
        "Password must have at least one uppercase and one lowercase character"
      );
      toast.error(
        "Password must have at least one uppercase and one lowercase character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        e.target.reset();
        toast.success("Your SignUp Successful");
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/signin");
          })
          .catch((err) => {
            toast.error(err.message);
            setUser(user);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 px-4">
      <title>KidsToy - SignUp</title>

      <div className="card w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-2 text-purple-600">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Join <span className="font-semibold text-blue-500">KidsToy</span> today!
        </p>

        <form onSubmit={handleSignup} className="space-y-3">
          {/* Name */}
          <div>
            <label className="label-text font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
              required
            />
            {nameerror && (
              <p className="text-xs text-red-500 mt-1">{nameerror}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="label-text font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
              placeholder="Your Photo URL"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label-text font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label-text font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
                placeholder="Password"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="absolute right-3 top-2.5 text-xl text-purple-500"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold w-full mt-4 hover:opacity-90"
          >
            Sign Up
          </button>

          <p className="text-center mt-3 text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              to={`/signin`}
              className="text-blue-500 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>

          {success && (
            <p className="text-green-500 text-center font-semibold">
              Account created successfully!
            </p>
          )}
          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
