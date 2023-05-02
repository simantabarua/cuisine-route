import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signInWithGoogle, signInWithGithub, loginWithEmailPassword, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailPassword(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Sign in success",
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false)
        let errorMessage;

        switch (error.code) {
          case "auth/invalid-email":
            errorMessage = "Invalid email address";
            break;
          case "auth/user-disabled":
            errorMessage = "This account has been disabled";
            break;
          case "auth/user-not-found":
            errorMessage = "User not found";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password try again";
            break;
          default:
            errorMessage = error.message;
            break;
        }
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Sign in success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Sign in success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
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

            <div className="flex items-center justify-between flex-wrap text-center">
              <div className="form-control">
                <label className="cursor-pointer label justify-normal md:gap-x-2 text-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text px-1"> Remember me</span>
                </label>
              </div>
              <div>
                <a href="" className="btn-link">
                  Forget password
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button type="submit" className="btn btn-primary w-full">
                Log in
              </button>
            </div>
          </form>
          {error && (
            <p className="text-red-600 my-1 font-semibold"> {error} </p>
          )}
          <button onClick={handleGoogleSignIn} className="btn  w-full">
            <FaGoogle /> Login With Google
          </button>

          <button onClick={handleGithubSignIn} className="btn  w-full">
            <FaGithub /> Login With Github
          </button>
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
