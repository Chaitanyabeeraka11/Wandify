import React, { useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../Assets/assets";
import { PlayerContext } from "../context/PlayerContext";

export default function DisplayAlbum() {
  const { id } = useParams();
  const album = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-60 rounded-3xl" src={album.image} alt={album.name} />
        <div className="flex flex-col text-white">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{album.name}</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-white text-xl font-bold">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-white hover:bg-[#986F51] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-white">{index + 1}</b>
            <img
              className="inline w-10 mr-5 rounded-xl"
              src={item.image}
              alt=" "
            />
            {item.name}
          </p>
          <p className="text-[16px]">{album.name}</p>
        </div>
      ))}
    </>
  );
}
