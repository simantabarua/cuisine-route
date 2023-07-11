import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const Featured = () => {
  return (
    <>
      <SectionHeader title={' Featured Recipe'}/>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-7xl mx-auto items-center">
              <div className="md:col-span-2  flex flex-col gap-4">
                  <div className="flex gap-2 ">
                      <img className="md:h-28 w-48 object-cover" src="https://i.ibb.co/9ym5xnM/food-img7.jpg" alt="" />
                      <div>
                          <p className="font-bold text-xl">Carolina Red Slaw</p>
                          <p>Rating: 4.2</p>
                      </div>
                  </div>
                  <div className="flex gap-2">
                      <img className="md:h-28 w-48 object-cover" src="https://i.ibb.co/gRz4R8P/food-img1.jpg" alt="" />
                      <div>
                          <p className="font-bold text-xl">Pozole Rojo</p>
                          <p>Rating: 4.2</p>
                      </div>
                  </div>
                  <div className="flex gap-2">
                      <img className="md:h-28 w-48 object-cover" src="https://i.ibb.co/bvfPqBD/food-img17.jpg" alt="" />
                      <div>
                          <p className="font-bold text-xl">Chiles en Nogada</p>
                          <p>Rating: 4.2</p>
                      </div>
                  </div>
                  <div className="flex gap-2">
                      <img className="md:h-28 w-48 object-cover rounded-md" src="https://i.ibb.co/9Tr46g1/food-img14.jpg" alt="" />
                      <div>
                          <p className="font-bold text-xl">Sopa de Lima</p>
                          <p>Rating: 4.2</p>
                      </div>
                  </div>
        </div>
        <div className="md:col-span-3 ">
                  <img className="md:h-[560px] w-full rounded-lg" src="https://i.ibb.co/NTCHXwN/food-img10.jpg" />
                  <p className="font-bold text-xl my-2">Pescado a la Veracruzanae culpa ad officia alias maxime tempore nihi</p>
        </div>
      </div>
    </>
  );
};

export default Featured;
