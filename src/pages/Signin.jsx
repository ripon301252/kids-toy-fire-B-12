import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";


const Signin = () => {
  const { signIn, popupGoogleSignin, setUser } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        // const user = result.user;
        alert("Your Signin Successful");
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };


  const handleGoogleSignin = () => {
      // signInWithPopup(auth, googleProvider)
      popupGoogleSignin()
        .then((res) => {
          // const loggedInUser = {
          //   // displayName: res.user.displayName || "Mahfuzur Rahman",
          //   // photoURL: res.user.photoURL || "https://i.ibb.co/KjY4bCfy/mahfuz.png",
          //   displayName: res.user.displayName,
          //   photoURL: res.user.photoURL,
          //   email: res.user.email,
          //   uid: res.user.uid,
          // };
          
          setUser(/*loggedInUser*/ res.user);
         
          alert("Signin successful");
        })
        .catch((e) => {
          console.log(e);
          alert(e.message);
        });
    };

   const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className=" flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignin} className="card-body">
            <h1 className="text-2xl font-bold text-center mb-3">Sign In</h1>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
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
                  className=" absolute top-2 right-7 cursor-pointer"
                >
                  {showPassword ? (
                    <IoEyeOff className="text-2xl text-green-500" />
                  ) : (
                    <IoEye className="text-2xl text-red-500" />
                  )}
                </button>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
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



              <p className="text-accent text-center font-semibold mt-3">
                Don't Have An Account ? please{" "}
                <Link
                  to={`/signup`}
                  className="text-blue-500 underline text-[13px]"
                >
                  Sign Up
                </Link>
              </p>
            </fieldset>
            {/* {error && <p className="text-red-500 text-xs text-center font-semibold">{error}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
