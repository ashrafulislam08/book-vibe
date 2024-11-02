import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="my-12 bg-base-200 ">
      <div className="hero  min-h-screen max-w-5xl mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-[50%] rounded-lg shadow-2xl" />
          <div className="text-left">
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p>By {author}</p>
            <div className="divider my-1"></div>
            <p>{category}</p>
            <div className="divider my-1"></div>
            <p className="py-2 mb-5">
              <span className="font-bold">Review:</span> {review}
            </p>

            <div className="flex my-5 gap-4">
              <span className="font-bold text-gray-500">Tags:</span>
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn btn-xs bg-green-200 text-green-500"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="divider"></div>

            <div className="m-0">
              <div className="flex gap-6 my-2 text-gray-500">
                <p>Number of pages: </p>
                <p className="text-black">{totalPages}</p>
              </div>
              <div className="flex gap-6 my-2 text-gray-500">
                <p>Publisher: </p>
                <p className="text-black">{publisher}</p>
              </div>
              <div className="flex gap-6 my-2 text-gray-500">
                <p>Year of Publishing: </p>
                <p className="text-black">{yearOfPublishing}</p>
              </div>
              <div className="flex gap-6 my-2 text-gray-500">
                <p>Rating: </p>
                <p className="text-black">{rating}</p>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleMarkAsRead(bookId)}
                className="btn btn-outline btn-accent mr-4"
              >
                Read
              </button>
              <button className="btn btn-accent">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
