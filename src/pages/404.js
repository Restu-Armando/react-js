import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="welcome">
      <div className="container">
        <h1>404 | Page Not Found</h1>
        <Link to="/" className="btn btn-lg btn-success">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
