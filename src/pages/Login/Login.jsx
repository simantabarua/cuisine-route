import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-gray-50 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 card">
          <div>
            <h2 className="mt-6 text-center text-md md:text-lg font-extrabold text-gray-900">
              Log in to your account
            </h2>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                />
                <button
                  className="absolute right-2 inset-y-0"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap text-center">
              <div className="form-control">
                <label className="cursor-pointer label justify-normal md:gap-x-2 text-center">
                  <input type="checkbox" className="checkbox checkbox-error" />
                  <span className="label-text px-1"> Remember me</span>
                </label>
              </div>
              <div>
                <a href="" className="btn-link">
                  Forget password
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-full">
                Log in
              </button>
            </div>
          </form>
          <div>
            <h2>
              Don't have an account?{" "}
              <Link to="/register">
                <button className="btn-link">
                  Click here to create an account
                </button>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
