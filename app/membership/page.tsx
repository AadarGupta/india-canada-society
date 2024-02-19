"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the structure for member information
type MemberInfo = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
};

// Type for membership options
type MembershipType = "two year" | "lifetime";
type MembershipPlan = "n/a" | "regular" | "student" | "single" | "family";

// Type guard to ensure a key is a valid key of MemberInfo
const isMemberInfoKey = (key: any): key is keyof MemberInfo => {
  return [
    "firstName",
    "lastName",
    "address",
    "city",
    "postalCode",
    "phone",
    "email",
  ].includes(key);
};

const pricing = {
  "n/a": "",
  regular: "$40",
  student: "$20",
  single: "$100",
  family: "$200",
};

const Membership = () => {
  const router = useRouter();
  const [membershipType, setMembershipType] =
    useState<MembershipType>("two year");
  const [membershipPlan, setMembershipPlan] = useState<MembershipPlan>("n/a");
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });
  const currentDate = new Date().toLocaleDateString();

  const handleMembershipTypeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setMembershipType(event.target.value as MembershipType);
    setMembershipPlan("n/a");
  };

  const handleMembershipPlanChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setMembershipPlan(event.target.value as MembershipPlan);
  };

  const validatePostalCode = (code: string) => {
    return /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(code);
  };

  const validatePhoneNumber = (number: string) => {
    return /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
      number
    );
  };

  const validateEmail = (email: string) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (isMemberInfoKey(name)) {
      setMemberInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      membershipType,
      membershipPlan,
      ...memberInfo,
    };

    if (memberInfo.firstName !== "") {
      if (memberInfo.lastName !== "") {
        if (memberInfo.address !== "") {
          if (memberInfo.city !== "") {
            if (validatePostalCode(memberInfo.postalCode)) {
              if (validatePhoneNumber(memberInfo.phone)) {
                if (validateEmail(memberInfo.email)) {
                  if (membershipPlan !== "n/a") {
                    try {
                      const response = await fetch("/api/membership", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                      });

                      const data = await response.json();

                      if (response.ok) {
                        alert(
                          `Your form has been submitted. Please send ${pricing[membershipPlan]} to indiacanadasociety@gmail.com to confirm your membership`
                        );
                        router.push("/");
                      } else {
                        alert(data.message);
                      }
                    } catch (error) {
                      console.error("Submission error:", error);
                      alert("Failed to submit the form. Please try again");
                    }
                  } else {
                    alert(
                      "Form credentials are incorrect: Double check membership plan"
                    );
                  }
                } else {
                  alert(
                    "Form credentials are incorrect: Double check email address"
                  );
                }
              } else {
                alert(
                  "Form credentials are incorrect: Double check phone number"
                );
              }
            } else {
              alert("Form credentials are incorrect: Double check postal code");
            }
          } else {
            alert("Form credentials are incorrect: Double check city");
          }
        } else {
          alert("Form credentials are incorrect: Double check address");
        }
      } else {
        alert("Form credentials are incorrect: Double check last name");
      }
    } else {
      alert("Form credentials are incorrect: Double check first name");
    }
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 100px)" }}
      className="flex justify-center items-center bg-gray-100 py-12 p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white rounded-xl shadow-md p-12 space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl text-center">
          Membership
        </h1>

        <p className="text-lg text-center">
          <span className="text-gray-700">Date:</span>{" "}
          <span className="text-black ml-1 regular-16">{currentDate}</span>
        </p>

        <div className="space-y-4">
          <div className="flex gap-20 items-center justify-center">
            <div>
              <label
                htmlFor="membershipType"
                className="block text-sm font-medium text-gray-700"
              >
                Membership Type
              </label>
              <select
                id="membershipType"
                name="membershipType"
                value={membershipType}
                onChange={handleMembershipTypeChange}
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option value="two year">Two Year</option>
                <option value="lifetime">Lifetime</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="membershipPlan"
                className="block text-sm font-medium text-gray-700"
              >
                Membership Plan
              </label>
              <select
                id="membershipPlan"
                name="membershipPlan"
                value={membershipPlan}
                onChange={handleMembershipPlanChange}
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option value="n/a">Please Select An Option</option>
                {membershipType === "two year" ? (
                  <>
                    <option value="regular">Regular $40</option>
                    <option value="student">Student $20</option>
                  </>
                ) : (
                  <>
                    <option value="single">Single $100</option>
                    <option value="family">Family $200</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {Object.entries(memberInfo).map(([key, value]) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700"
              >
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={
                  key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")
                }
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          ))}
        </div>
        {pricing[membershipPlan] !== "" && (
          <p className="text-lg font-medium text-center p-0">
            E-transfer {pricing[membershipPlan]} to indiacanadasociety@gmail.com
          </p>
        )}

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Membership;
