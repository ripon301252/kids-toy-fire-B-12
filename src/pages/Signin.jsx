import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Signin = () => {
  const {signIn} = use(AuthContext)

  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
      .then(() =>{
        // const user = result.user;
        alert('Your Signin Successful')
        navigate('/')
      })
      .catch(err =>{
        alert(err.message)
      })

  }
  
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
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
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
