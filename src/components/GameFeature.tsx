import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import { GameFeature } from "./data/Data";

const GameFeatures: React.FC = () => {
  return (
    <section className="feature text-white flex justify-evenly p-20 bg-[#150e1c]">
      {GameFeature.length > 0 &&
        GameFeature.map((feature) => {
          return (
            <div
              key={feature.id}
              className="basis-[30%] flex flex-col items-center gap-4 align-baseline"
            >
              <div className="text-center w-[76px] h-[76px] object-fill">
                <Image src={feature.featureLogo} alt="feature-Image" />
              </div>
              <h4>{feature.featureHeading}</h4>
              <p className="text-gray-500 w-[75%] mx-auto text-center">
                {feature.featurePara}
              </p>
            </div>
          );
        })}
    </section>
  );
};

export default GameFeatures;
