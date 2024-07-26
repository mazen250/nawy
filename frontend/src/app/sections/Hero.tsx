import React from "react";
import HeroInput from "./HeroInput";

function Hero() {
  return (
    <div className=" h-screen md:h-[600px] bg-hero bg-cover bg-bottom bg-no-repeat relative flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 w-full container">
        <HeroInput />
      </div>
    </div>
  );
}

export default Hero;
