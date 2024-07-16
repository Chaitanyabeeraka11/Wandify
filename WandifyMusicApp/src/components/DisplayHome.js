import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../Assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

export default function DisplayHome() {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-[#3D405B]"> Featured</h1>
        <div className="flex overflow-auto text-[#3D405B]">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl text-[#3D405B]">Today's Hits</h1>
        <div className="flex overflow-auto text-[#3D405B]">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
