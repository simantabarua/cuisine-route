import React from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "./../../../public/404-error.json";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();
  return (
    <div className=" flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-base-100">
      <div className="sm:mx-auto sm:w-full md:max-w-6xl h-20 relative">
        <div className="text-center md:absolute z-10 inset-x-0 top-0">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
            {status|| 'Error :('}
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
            {statusText || "Something is wrong!"}
          </p>
          <p className="text-gray-500 mt-4 pb-4 text-center">
            {error?.message}
          </p>
          <Link to="/">
            <button className="btn btn-primary  m-2">Back to Home</button>
          </Link>
        </div>
        <div className="bg-base-100">
        <Lottie animationData={ErrorAnimation}  />
       </div>
      </div>
    </div>
  );
};

export default ErrorPage;
