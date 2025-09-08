import React, { useState } from "react";
import data from "../data/data.json"; // ✅ import json
import Accordian from "./Accordian";

// icons for each service
import bulb from "../assets/bulb.png";
import archery from "../assets/archery.png";
import setting from "../assets/setting.png";
import rocketFlat from "../assets/rocketFlat.png";
import search from "../assets/search.png";
import earth from "../assets/earth.png";

const icons = [bulb, archery, setting, rocketFlat, search, earth];

export default function OurServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[1300px] h-auto mt-[350px] ml-[80px]">
      {/* Heading */}
      <div className="flex">
        <h3 className="w-[212px] h-[48px] mt-[5px] ml-[80px] font-[700] text-[32px] text-[#3D3D3D]">
          Our Services
        </h3>
        <p className="text-[#7F7F7F] w-[815px] h-[105px] ml-[200px] leading-[30px] text-[19px] font-[400]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters
        </p>
      </div>

      {/* Accordian rows */}
      <div className="w-[1300px] h-auto">
        {data["Our Services"].map((item, index) => (
          <Accordian
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
            icon={icons[index]}
          />
        ))}
      </div>
    </div>
  );
}
