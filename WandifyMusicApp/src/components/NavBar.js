import React from "react";
import { assets } from "../Assets/assets";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const naviagte = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => naviagte(-1)}
            className="w-8 bg-[#3D405B] p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            onClick={() => naviagte(1)}
            className="w-8 bg-[#3D405B] p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_left"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <p className="text-white bg-[#3D405B] px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="text-white bg-[#3D405B] px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
      </div>
    </>
  );
}
