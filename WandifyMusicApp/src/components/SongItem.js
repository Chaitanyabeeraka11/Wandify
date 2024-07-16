import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default function SongItem({ name, image, id }) {
  const { playWithId } = useContext(PlayerContext);
  // Destructure the props
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#986F51]"
    >
      <img className="rounded-2xl" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
    </div>
  );
}
