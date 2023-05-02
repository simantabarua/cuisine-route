import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState(null);
  const { createUserWithEmail } = useContext(AuthContext);
  const regex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
  );
  const handleRegister = (e) => {
    console.log(email);
    
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      console.log("not match");
      return;
    }
    if (!regex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&). Please try again."
      );
      console.log("rex not match");
      return;
    }
    setError("");
    createUserWithEmail(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 card">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register an account
            </h2>
          </div>
          <form onSubmit={handleRegister} className="mt-8 space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
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
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="confirm password"
                  className="input input-bordered w-full"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
                <button
                  className="absolute right-2 inset-y-0"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex items-center justify-between">
              <div className="form-control">
                <label className="cursor-pointer label justify-normal gap-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-error"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                  />
                  <span className="label-text">
                    Accept terms and conditions
                  </span>
                </label>
              </div>
              <div>
                <a href="" className="btn-link">
                  Read terms and conditions
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={!termsAccepted}
              >
                Register
              </button>
            </div>
          </form>
          <dir>
            <h2>
              Already have an account?
              <button className="btn-link">
                <Link to="login"> Click here to Login</Link>
              </button>
            </h2>
          </dir>
        </div>
      </div>
    </>
  );
};

export default Register;
