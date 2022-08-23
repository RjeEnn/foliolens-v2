import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/404.png";

const NotFound = () => {
  return (
    <div className="w-full h-screen overflow-auto flex flex-col items-center justify-center">
      <img src={notFound} alt="404" className="w-1/3" />
      <p className="text-center text-xl mt-8">
        Nothing to see here. Return{" "}
        <Link className="text-indigo-600 hover:underline" to="/">
          to the Home Page
        </Link>
        ?
      </p>
    </div>
  );
};

export default NotFound;
