import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import AceCard from "../../assets/AceCard.svg";
import BlackChip from "../../assets/BlackChip.svg";
import GreenChip from "../../assets/GreenChip.svg";
import PinkChip from "../../assets/PinkChip.svg";
import { faqData } from "./data/Data";
const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="mx-auto p-40 bg-[#0c0c0c] text-white relative ">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-6xl font-normal leading-10 text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer border-[#B40E0D] border-t-[1px]  transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleAccordionClick(index)}
              >
                <span className="flex text-start text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-200" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-200">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Image
        src={AceCard}
        alt="Image"
        className="w-[100px] h-[100px] absolute top-[-4rem] right-8"
      />
      <Image
        src={BlackChip}
        alt="Image"
        className="w-w-[100px] h-[100px] absolute top-1 left-12"
      />
      <Image
        src={PinkChip}
        alt="Image"
        className="w-w-[100px] h-[100px] absolute bottom-[-3rem] left-8"
      />
      <Image
        src={GreenChip}
        alt="Image"
        className="w-[140px] h-[140px] absolute bottom-8 right-8"
      />
      <Image
        src={AceCard}
        alt="Image"
        className=" rotate-180 w-[110px] h-[110px] absolute bottom-[4rem] left-28"
      />
    </section>
  );
};

export default Faq;
