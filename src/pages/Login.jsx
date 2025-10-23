import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Signin = () => {
  const { signIn, popupGoogleSignin, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [emailValue, setEmailValue] = useState(""); // Email capture
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setEmailValue(email); // save email for forgot password page

    signIn(email, password)
      .then(() => {
        alert("Your Signin Successful");
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const handleGoogleSignin = () => {
    popupGoogleSignin()
      .then((res) => {
        setUser(res.user);
        alert("Signin successful");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleSignin} className="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Sign In</h1>

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="input w-full"
            placeholder="Email"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <button
              onClick={handleTogglePasswordShow}
              className="absolute top-2 right-7 cursor-pointer"
            >
              {showPassword ? (
                <IoEyeOff className="text-2xl text-green-500" />
              ) : (
                <IoEye className="text-2xl text-red-500" />
              )}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="mt-2">
            <Link
              to={`/forgot-password?email=${emailValue}`}
              className="link link-hover text-sm text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-gray-300"></div>
            <span className="text-sm text-gray-500">or</span>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          {/* Google Signin */}
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-accent text-center font-semibold mt-3 text-sm">
            Don't Have An Account?{" "}
            <Link to={`/signup`} className="text-blue-500 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;