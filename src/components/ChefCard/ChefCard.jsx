import React from "react";

const ChefCard = () => {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;

<Rating
  className="text-2xl"
  readonly
  placeholderRating={number}
  emptySymbol={<HiOutlineStar className="text-yellow-600  " />}
  placeholderSymbol={<HiStar className="text-yellow-600" />}
  fullSymbol={<HiStar />}
/>;
