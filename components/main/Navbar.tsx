"use client";
import { Socials } from "@/constants";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] relative top-0  z-50 ">
      <div className="w-full h-full flex absolute flex-row items-center z-50 background-blur border-none justify-around m-auto px-[10px]  ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin z-50 "
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            WebChain Dev
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-lg:hidden">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className=" cursor-pointer"
            />
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-200 focus:outline-none right-0 transition-all duration-75"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <FaBars className=" text-[20px]" />
          ) : (
            <IoMdClose className=" text-[25px]" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        className={`${
          isOpen
            ? "absolute top-[65px] left-0 right-0 md:hidden z-40 h-screen background-blur  text-[20px] border-none text-center"
            : "hidden"
        }`}
      >
        <div className="flex flex-col pt-14 gap-10 space-y-3 py-3 px-4 rounded-md h-full font-bold text-gray-200   ">
          <a
            href="#about-me"
            className="block py-2 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="block py-2 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </motion.div>
      {/* {isOpen && (
      )} */}
    </div>
  );
};

export default Navbar;
