import Lottie from "lottie-react";
import React from 'react'
import Loader from "./../../../public/Loader.json";


const Loading = () => {
  return (
      <div className='h-screen flex justify-center items-center '>
          <h1 className='text-4xl font-bold '>Loading...</h1>
          <Lottie animationData={Loader}  />
    </div>
  )
}

export default Loading