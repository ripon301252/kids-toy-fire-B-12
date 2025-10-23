import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Signin = () => {
  const { signIn, popupGoogleSignin, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then(() => {
        e.target.reset();
        toast.success("Your Signin Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignin = () => {
    popupGoogleSignin()
      .then((res) => {
        setUser(res.user);
        toast.success("Google Signin successful");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <title>KidsToy - SignIn</title>

      <div className="card w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back 👋</h1>

        <form onSubmit={handleSignin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10 focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordShow}
                className="absolute top-2.5 right-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                {showPassword ? (
                  <IoEyeOff className="text-2xl" />
                ) : (
                  <IoEye className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to={`/forgotPassword`}
              className="text-pink-600 text-sm hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-pink-500 to-purple-500 border-none text-white font-semibold hover:scale-105 transition-transform"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-gray-300"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          {/* Google Signin */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 bg-white text-gray-700 px-5 py-2 rounded-lg w-full border border-gray-200 font-semibold hover:bg-gray-100 shadow-md transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to={`/signup`}
              className="text-pink-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-xs text-center font-semibold mt-2">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;
