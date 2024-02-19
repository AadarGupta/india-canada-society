"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  const router = useRouter();

  // Function to navigate to /membership
  const navigateToMembership = () => {
    router.push("/membership");
  };

  return (
    <footer className="bg-gray-200 text-gray-800 pt-12 pb-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10 justify-center">
        {/* Quick Links - Stacked Vertically */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Quick Links</h2>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-gray-600 hover:text-red-500 hover:font-bold hover:scale-110 transition-all cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-bold text-lg text-gray-800 mb-4">Follow Us</h2>
          <div className="flex space-x-6 justify-center items-center">
            <Link href="https://www.facebook.com/profile.php?id=61553804649618">
              <span className="cursor-pointer">
                <Image
                  src="/facebook.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="inline-block cursor-pointer hover:scale-110 transition-all"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="font-bold text-lg text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col gap-2">
            <Link
              href="mailto:indiacanadasociety@gmail.com"
              className="text-gray-600 hover:text-red-500 hover:font-bold hover:scale-110 transition-all cursor-pointer"
            >
              indiacanadasociety@gmail.com
            </Link>
            <Link
              href="tel:+19059020476"
              className="text-gray-600 hover:text-red-500 hover:font-bold hover:scale-110 transition-all cursor-pointer"
            >
              +1 (905) 902-0476
            </Link>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <Button
            type="button"
            title="Join Us"
            variant="btn_red_long"
            onClick={navigateToMembership}
          />
        </div>
      </div>

      <div className="text-center text-gray-600 border-t border-gray-400 mt-10 pt-6">
        © {new Date().getFullYear()} India Canada Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
