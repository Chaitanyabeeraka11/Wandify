import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../Assets/assets";

export default function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgcolor}, #b08968)`;
    } else {
      displayRef.current.style.background =
        "linear-gradient(to right, #fcd5ce, #d8e2dc)";
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded-2xl text-black overflow-auto lg:w-[75%] lg:ml-0"
      style={{
        background: "linear-gradient(to right, #fcd5ce, #d8e2dc)",
      }}
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}
