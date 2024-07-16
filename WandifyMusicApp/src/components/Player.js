import React, { useContext } from "react";
import { assets } from "../Assets/assets";
import { PlayerContext } from "../context/PlayerContext";

export default function Player() {
  const {
    seekBarRef,
    seekBgRef,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-[#fec89a] flex justify-between items-center text-black rounded-3xl ml-2 mr-2 mb-2">
      <div className="hidden lg:flex items-center gap-4">
        <img
          className="w-14 ml-4 rounded-xl shadow-lg"
          src={track.image}
          alt="song_image"
        />
        <div>
          <p className="text-black font-bold">{track.name}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="shuffle_icon"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="prev_icon"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="pause_icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="play_icon"
            />
          )}
          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="next_icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="loop_icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-black">
            {time?.currentTime?.minute ?? "00"}:
            {time?.currentTime?.second ?? "00"}
          </p>
          <div
            ref={seekBgRef}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-[#3D405B] rounded-full cursor-pointer"
          >
            <hr
              ref={seekBarRef}
              className="h-1 border-none w-0 bg-white rounded-full"
            />
          </div>
          <p className="text-black">
            {time?.totalTime?.minute ?? "0"}:{time?.totalTime?.second ?? "00"}
          </p>
        </div>
      </div>
    </div>
  );
}
