import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className=" relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" rotate-180 absolute top-[-340px] left-0 z-20 w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
