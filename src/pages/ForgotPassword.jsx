import React from "react";
import { useLocation } from "react-router";

const ForgotPassword = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromLogin = queryParams.get("email") || "";

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    // Redirect to Gmail
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-50">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleReset} className="card-body">
          <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={emailFromLogin}
            className="input w-full"
            placeholder="Enter your email"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
