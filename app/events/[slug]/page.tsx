import React from "react";

const Page = ({
  searchParams,
}: {
  searchParams: {
    name: string;
    date: string;
    img: string;
    data: string;
  };
}) => {
  return (
    <div className="bg-gray-100 text-gray-800 w-full py-12">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-stretch w-[90vw]">
          {/* Ensure both children (img and info div) stretch to fill the parent's height */}
          <div className="flex-1 flex justify-center items-center bg-white">
            <img
              src={searchParams.img}
              alt={searchParams.name}
              className="max-w-full h-auto lg:h-full object-cover" // Added 'object-cover' to maintain aspect ratio
            />
          </div>

          <div className="flex-1 flex justify-center bg-white w-full py-12 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">
                {searchParams.name}
              </h1>
              <p className="text-lg font-medium text-center py-4">
                <span className="text-gray-700 text-xl">Date:</span>
                <span className="text-black ml-1 regular-20">
                  {searchParams.date}
                </span>
              </p>
              <p className="text-md pt-6">{searchParams.data}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
