import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image, bookName } = book;

  return (
    <div className="my-12 bg-base-200 ">
      <div className="hero  min-h-screen max-w-4xl mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-52 rounded-lg shadow-2xl" />
          <div className="text-left">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <button className="btn btn-outline btn-accent mr-4">Read</button>
              <button className="btn btn-accent">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
