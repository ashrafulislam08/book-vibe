import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl">Page not found!</h2>
        <p>Error 404</p>
        <p className="my-5 btn">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
