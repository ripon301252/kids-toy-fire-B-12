import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);

   const [showPassword, setShowPassword] = useState(false);
   const [nameerror, setNameError] = useState('');
   const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if(name.length < 5){
      setNameError('Name should be more then 5 character');
      return;
    }
    else{
      setNameError('')
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(()=>{
            setUser({...user, displayName: name, photoURL: photo,});
            navigate('/')
          })
          .catch(err => {
            alert(err.message)
            setUser(user)
          })
      })
      .catch((err) => {
        alert(err.message);
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
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-2xl font-bold text-center mb-3">Sign Up</h1>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
                required
              />
              {nameerror && <p className="text-xs text-red-500">{nameerror}</p>}

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
                required
              />

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

              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
              <p className="text-accent text-center font-semibold mt-3">
                Already Have An Account ? please{" "}
                <Link
                  to={`/signin`}
                  className="text-blue-500 underline text-[13px]"
                >
                  Sign In
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
