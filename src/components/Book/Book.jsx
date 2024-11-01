import React from "react";

const Book = ({ book }) => {
  const { bookName, image, author, tags, category, rating, totalPages } = book;
  console.log(book);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="bg-gray-400 rounded-xl">
        <div>
          <img className="w-36 mx-auto p-3" src={image} alt={bookName} />
        </div>
      </figure>
      <div className="card-body text-left">
        <div className="flex justify-center gap-4">
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-xs bg-green-200 text-green-500"
            >
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By {author}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div>{rating}</div>
          <div>{totalPages}</div>

          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
