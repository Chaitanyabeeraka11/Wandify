import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#986F51]"
    >
      <img className="rounded-2xl" src={image} alt=" " />
      <p className="font-bold mt-2 mb-1">{name}</p>
    </div>
  );
}
