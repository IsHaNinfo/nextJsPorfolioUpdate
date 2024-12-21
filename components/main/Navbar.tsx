"use client"; // Add this at the very top

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import NavLogo from "../../public/NavLogo.png";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src={NavLogo}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Ishan Nethmina
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] items-center justify-between border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer hover:text-[#7042f8]">
            About me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-[#7042f8]">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer hover:text-[#7042f8]">
            Featured Works
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-300"
        >
          <span className="text-2xl">
            {isMenuOpen ? <IoMdClose /> : <TiThMenu />}
          </span>
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="cursor-pointer hover:text-[#7042f8]"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#030014] py-4 mt-2 rounded-lg text-gray-200">
          <a
            href="#about-me"
            className="py-2 cursor-pointer hover:bg-[#7042f8] hover:text-white rounded-lg px-4"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            About me
          </a>
          <a
            href="#skills"
            className="py-2 cursor-pointer hover:bg-[#7042f8] hover:text-white rounded-lg px-4"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Skills
          </a>
          <a
            href="#projects"
            className="py-2 cursor-pointer hover:bg-[#7042f8] hover:text-white rounded-lg px-4"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            Featured Works
          </a>
          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                className="cursor-pointer hover:text-[#7042f8]"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
