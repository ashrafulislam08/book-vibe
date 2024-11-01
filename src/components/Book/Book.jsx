import React from "react";

const Book = ({ book }) => {
  const { bookName, image } = book;
  console.log(book);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <div className="bg-gray-400 w-full">
          <img className="w-36 mx-auto p-3" src={image} alt="Shoes" />
        </div>
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{bookName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
