import React from "react";
import vector from "./vector.svg";

export default function Accordian({ item, isOpen, onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[1240px] ml-[100px] border-b border-[#D3D3D3] py-4"
    >
      <div className="flex justify-between items-center">
        {/* Left side: Icon + Title */}
        <div className="flex items-center gap-4 ml-[10px]">
          <img className="w-[28px] h-[28px]" src={vector} alt="icon" />
          <h3 className="font-semibold text-[22px] text-[#3D3D3D]">
            {item.header}
          </h3>
        </div>

        {/* Right side: Arrow */}
        <img
          className={`mr-[20px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          src={vector}
          alt="toggle"
        />
      </div>

      {/* Expanded content */}
      {isOpen && (
        <p className="ml-[50px] mt-2 text-[#7F7F7F] text-[16px] leading-[24px]">
          {item.content}
        </p>
      )}
    </div>
  );
}
