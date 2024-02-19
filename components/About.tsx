import React, { useState } from "react";
import { ABOUT_US } from "@/constants"; // Ensure this path is correct for your project setup
import Link from "next/link";

const About = () => {
  const [activeContent, setActiveContent] = useState(ABOUT_US[0].content);
  const [activeOption, setActiveOption] = useState(ABOUT_US[0].option);

  const handleOptionClick = (item: { option: string; content: string }) => {
    setActiveOption(item.option);
    setActiveContent(item.content);
  };

  const renderContentWithBreaksAndLink = (
    contentString: string,
    option: string
  ) => {
    return contentString.split("\n").map((text, index) => (
      <p key={index} className="mb-4">
        {text}
        {option === "Who Are We?" && text.includes("constitution") ? (
          <>
            {" "}
            <Link href="/constitution" className="text-red-600 hover:underline">
              here
            </Link>
            .
          </>
        ) : null}
      </p>
    ));
  };

  return (
    <section className="w-full mx-auto py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            About Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-12 bg-gray-100">
        <aside className="w-full lg:w-[40%] p-12 px-14 lg:border-r-2 lg:border-b-0 border-b-2">
          <ul className="space-y-4 lg:float-right lg:text-right text-center">
            {ABOUT_US.map((item) => (
              <li
                key={item.option}
                onClick={() => handleOptionClick(item)}
                className={`regular-24 text-gray-700 cursor-pointer transition-all ${
                  activeOption === item.option
                    ? "decoration-red-600 text-red-600 bold-32"
                    : "hover:text-red-500 hover:bold-24"
                }`}
              >
                {item.option}
              </li>
            ))}
          </ul>
        </aside>
        <article className="w-full lg:w-[60%] p-12">
          <div className="regular-22">
            {renderContentWithBreaksAndLink(activeContent, activeOption)}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
