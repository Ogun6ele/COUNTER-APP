import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 style={{color: "red"}}>404 Not Found</h1>
      <p>The requested page could not be found.</p>

      <Link to="/">
        {" "}
        <button style={{color: "white", backgroundColor: "red"}}>Back to Homepage</button>{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;