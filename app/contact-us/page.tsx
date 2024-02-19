"use client";
import React, { FormEvent, useState } from "react";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err: any) {
      console.log("Error: ", err);
    }
    alert("Your report has been submitted. Thank you!");
    setEmail("");
    setPhone("");
    setMessage("");
    setName("");
  };

  return (
    <div className="flex bg-gray-100 text-gray-800 justify-center items-center flex-col lg:py-12">
      <div className="text-center py-12 bg-white w-screen lg:w-[50vw] lg:rounded-xl lg:shadow-xl flex justify-center items-center flex-col">
        <h1 className="text-5xl md:text-6xl font-bold">Contact Form</h1>
        <p className="mt-4 max-w-[80%]">
          One of our representatives will get back to you shortly!
        </p>

        {/* Form for reporting issues */}
        <form className="mt-6 w-full px-12 space-y-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 float-start py-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="px-3 py-2 border rounded-md w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 float-start py-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="px-3 py-2 border rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 float-start py-1"
            >
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              placeholder="Your phone number"
              className="px-3 py-2 border rounded-md w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 float-start py-1"
            >
              Message
            </label>
            <textarea
              placeholder="Message"
              name="message"
              className="px-3 py-2 border rounded-md w-full"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
