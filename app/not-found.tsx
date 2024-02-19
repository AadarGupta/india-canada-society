import React, { FormEvent, useState } from "react";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center bg-gray-100 text-gray-800 px-4"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="text-center p-12 bg-white shadow-xl rounded-xl max-w-md mx-auto w-full">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Oops
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-3">Page Not Found</p>
        <p className="mt-4">Sorry, we couldn't find this page.</p>
        <p>
          If you think this is an issue, you may report it to{" "}
          <a
            href="mailto:aadar100@gmail.com?Subject=ICS%Website:%Tech"
            target="_top"
            className="text-red-600 hover:underline"
          >
            aadar100@gmail.com
          </a>
          {". "}
          Alternatively, you can return{" "}
          <a href="/" className="text-red-600 hover:underline">
            home
          </a>
          {"."}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
