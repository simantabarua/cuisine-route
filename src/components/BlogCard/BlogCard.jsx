import React from "react";

function BlogCard({ questionAnswer }) {

  const { question, answer } = questionAnswer;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
        <h2 className="card-title">{question}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}

export default BlogCard;
