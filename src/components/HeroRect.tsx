import React from "react";
import hero from "../../assets/heroGroup.svg";
import Image from "next/image";

const HeroRect: React.FC = () => {
  return (
    <div className=" absolute bottom-3  border-yellow-900 w-full  ">
      <Image src={hero} alt="hero" className="w-full" />
    </div>
  );
};

export default HeroRect;   
