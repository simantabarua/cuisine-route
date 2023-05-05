import React from "react";
import AboutAnimation from "./../../../public/about.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <div className="bg-base-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-4xl text-center md:text-7xl font-bold">About Us</h1>
        <div className="lg:grid grid-cols-1 lg:gap-8 place-items-center">
          <div>
            <Lottie animationData={AboutAnimation} className="h-96" />
          </div>
          <div>
            <div>
              <h2 className="text-3xl font-extrabold  sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We believe that cooking and sharing food brings people together
                and creates lasting memories. Our mission is to inspire and
                empower home cooks around the world to create delicious and
                healthy meals for their families and friends.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold  sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We are a passionate and dedicated team of food lovers, recipe
                developers, photographers, and writers. Our goal is to provide
                you with the best recipes, cooking tips, and kitchen inspiration
                to help you become a better cook.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold  sm:text-4xl">
                Our Values
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                At our food recipe website, we value creativity, authenticity,
                and accessibility. We believe that everyone should have access
                to delicious and healthy meals, regardless of their budget or
                skill level in the kitchen.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold  sm:text-4xl">
                Community Engagement
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We are committed to fostering a community of home cooks who
                share their love of food and cooking. We encourage our readers
                to share their recipes, cooking tips, and experiences with us
                and with each other. Together, we can learn, grow, and create
                amazing meals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
