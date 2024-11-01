import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, image, author, tags, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="bg-gray-200 rounded-xl px-8 py-4">
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
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="flex gap-3">
              <div>{rating}</div>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
