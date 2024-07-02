"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxProps {
  type: "services" | "portfolio"; // Define the possible types for 'type'
}

const Parallax: React.FC<ParallaxProps> = ({ type }) => {
  const ref = useRef<HTMLDivElement>(null); // Use useRef with appropriate type

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden w-screen h-screen"
      ref={ref}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold lg:text-[72px] max-lg:text-[40px] max-lg:absolute max-lg:top-[50%]"
      >
        {type === "services" ? "What We Did?" : "Our Portfolio"}
      </motion.h1>

      <motion.div className="absolute bottom-0 w-full h-full max-lg:w-[140%] max-lg:h-[600px] ">
        <Image src={"/mountains.png"} alt="" fill />
      </motion.div>

      <motion.div
        style={{
          y: yBg,
        }}
        className="absolute bottom-10 w-full h-full max-lg:w-[150%]  max-lg:h-[400px]"
      >
        <Image src={"/planets.png"} alt="" fill />
      </motion.div>
    </div>
  );
};

export default Parallax;
