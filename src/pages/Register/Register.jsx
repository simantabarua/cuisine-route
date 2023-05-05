import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState(true);
  const { createUserWithEmail, auth, setLoading, user } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const regex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
  );

  const passwordHandler = (e) => {
    const password = e.target.value;
    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&). Please try again."
      );
    } else {
      setPassword(password);
      setPasswordError(false);
    }
  };

  const handleRegister = (e) => {
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
    createUserWithEmail(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: photoLink,
        });
        Swal.fire({
          icon: "success",
          title: "Sign in success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = "";
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Email address is already in use.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMessage = "Password should be at least 6 characters long.";
            break;
          default:
            errorMessage = error.message;
            break;
        }
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<span style="color:red">${errorMessage}</span>`,
        });
      });
    // Handle errors here
  };

  if (user) {
    return <Navigate to="/" />;
  }

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
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
                value={photoLink}
                onChange={(event) => setPhotoLink(event.target.value)}
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
                  onChange={passwordHandler}
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
            {passwordError && <p className="text-red-500">{passwordError}</p>}
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
            <p className="text-red-600 my-1 font-semibold"> {error} </p>

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
          <div>
            <h2>
              Already have an account?
              <button className="btn-link">
                <Link to="login"> Click here to Login</Link>
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
