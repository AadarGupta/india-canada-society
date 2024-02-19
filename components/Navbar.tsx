"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOptions, setMenu] = useState(false);

  // Function to navigate to /membership
  const navigateToMembership = () => {
    router.push("/membership");
    closeMenu();
  };

  const toggleMenu = () => {
    setMenu(!menuOptions);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  // Effect to toggle body overflow based on menuOptions
  useEffect(() => {
    if (menuOptions) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scroll is enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOptions]);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is 'xl' or larger (1280px is typically 'xl' in Tailwind CSS)
      if (window.innerWidth >= 1280) {
        closeMenu();
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize immediately in case the screen is already 'xl' or larger
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flexBetween padding-container relative z-30 py-5 max-h-[100px] border-t-[12px] border-red-500 shadow-md">
      <Link href="/">
        <div className="flex items-center justify-center w-full">
          <div className="relative h-[100px] w-[250px] md:w-[350px] lg:w-[400px] z-10">
            {/* Using layout="fill" and objectFit="contain" allows the image to scale within the div */}
            <Image
              src="/logo.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Link>

      <ul
        className={`${
          menuOptions
            ? "flex flex-col items-center justify-center fixed inset-0 bg-white bg-opacity-90 pt-[100px]"
            : "hidden"
        } h-full gap-10 xl:flex`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`${
              menuOptions ? "z-40 regular-32" : "hidden regular-20"
            } regular-32 text-gray-50 flexCenter cursor-pointer pb-1.5 hover:scale-110 hover:text-red-500 hover:font-bold transition-all`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        {menuOptions && (
          <Button
            type="button"
            title="Join Us"
            variant="btn_red_long"
            onClick={navigateToMembership}
          />
        )}

        <div className={`${menuOptions ? "flex gap-10" : "hidden"} `}>
          <Link href="https://www.facebook.com/profile.php?id=61553804649618">
            <span className="cursor-pointer">
              <Image
                src="/facebook.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer hover:scale-110 transition-all"
              />
            </span>
          </Link>
        </div>
      </ul>

      <div className="xl:flexCenter hidden">
        <div className="hidden h-full gap-5 xl:flex px-5">
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
        <Button
          type="button"
          title="Join Us"
          variant="btn_red"
          onClick={navigateToMembership}
        />
      </div>

      <Image
        src={menuOptions ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer xl:hidden z-40"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
