"use client";
import React, { useState } from "react";
import { CURRENT_BOD } from "@/constants"; // Import the data

const CurrentBOD = () => {
  // State to track which member's image is clicked for rotation
  const [rotatedMember, setRotatedMember] = useState("");

  // Toggle rotation for a member
  const toggleRotation = (name: string) => {
    if (rotatedMember === name) {
      setRotatedMember(""); // If the same member is clicked again, reset the rotation
    } else {
      setRotatedMember(name);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Team
          </h1>
        </div>
      </div>

      <div className="mt-20">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 md:gap-y-20">
          {CURRENT_BOD.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
              onClick={() => toggleRotation(member.name)}
            >
              <img
                className={`inline-block h-32 w-32 rounded-full ring-2 ring-white object-cover grayscale hover:grayscale-0 transition-all ${
                  rotatedMember === member.name ? "rotate-3d" : ""
                }`}
                src={member.image || "/currentBOD/no-image.png"}
                alt={member.name}
              />
              <dd className="mt-2 regular-20 leading-6 font-medium text-gray-900">
                {member.name}
              </dd>
              <dt className="mt-1 regular-16 text-gray-500">{member.role}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CurrentBOD;
