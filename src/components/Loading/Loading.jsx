import Lottie from "lottie-react";
import React from "react";
import Loader from "./../../../public/Loader.json";

const Loading = () => {
  return (
    <div className="md:h-screen flex justify-center items-center flex-col relative">
      <Lottie animationData={Loader} />
      <h1 className="text-4xl font-bold absolute mt-48 animate-pulse ">Loading...</h1>
    </div>
  );
};

export default Loading;
