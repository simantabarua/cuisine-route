import React from "react";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const ServiceBanner = () => {
  return (
    <>
      <div class="flex flex-col md:flex-row gap-4 bg-orange-200 items-center justify-evenly py-4 my-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <FaPhone className="h-20 w-20"/>
          <h3 className="font-bold text-xl">(999) 1234 56789</h3>
          <p>Free support line!</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <FiMail className="h-20 w-20"/>
          <h3 className="font-bold text-xl">mail@email.com</h3>
          <p>Free support by mail</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <BiSupport className="h-20 w-20" />
          <h3 className="font-bold text-xl">Get In Touch 24/7</h3>
          <p>Live Chat Support</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
