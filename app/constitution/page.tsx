import React from "react";

const Constitution = () => {
  const style = {
    width: "calc(100% - 24px)", // Full width minus padding
    minHeight: "100vh", // Full viewport height minus padding
    padding: "12px",
  };

  return (
    <div className="flex flex-col justify-center items-center p-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Constitution
          </h1>
        </div>
      </div>
      <object data={`/Constitution.pdf`} type="application/pdf" style={style}>
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a
            href={`/Constitution.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
          .
        </p>
      </object>
    </div>
  );
};

export default Constitution;
