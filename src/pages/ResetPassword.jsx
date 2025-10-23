import { useRef, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const ResetPassword = () => {
  const { passwordReset } = useContext(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const prefilledEmail = location.state?.email || "";

  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) return toast.error("Please enter your email");

    passwordReset(email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail.");
        navigate("/signin");
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <title>KidsToy - Reset Password</title>

      <div className="card w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl border border-white/40 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter your email address below and we’ll send you a password reset
          link.
        </p>

        <input
          ref={emailRef}
          defaultValue={prefilledEmail}
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-5 focus:ring-2 focus:ring-pink-400"
        />

        <button
          onClick={handleReset}
          className="btn btn-primary w-full bg-gradient-to-r from-pink-500 to-purple-500 border-none hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-white font-semibold"
        >
          Send Reset Link
        </button>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Remembered your password?{" "}
            <button
              onClick={() => navigate("/signin")}
              className="text-pink-600 hover:underline font-semibold"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
