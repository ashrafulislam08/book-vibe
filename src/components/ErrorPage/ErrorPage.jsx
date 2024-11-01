import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl">Page not found!</h2>
      <p>Error 404</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
