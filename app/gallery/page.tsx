import ImageGallery from "@/components/ImageGallery";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 text-gray-800 px-4 w-screen">
      <div className="text-center p-12 bg-white shadow-xl rounded-xl mx-auto h-full w-full flex items-center justify-center flex-row grid-cols-3">
        {/* <h1 className="text-4xl font-extrabold text-gray-900">COMING SOON</h1>
        <p className="mt-4">The pictures will be uploaded soon!</p>*/}
        <ImageGallery />
      </div>
    </div>
  );
};

export default page;
