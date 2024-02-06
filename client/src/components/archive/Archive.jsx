import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const Archive = () => {
  return (
    <div className="bg-orange-300 relative">
      <img
        src="https://picsum.photos/350/350"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 text-3xl flex px-2 gap-2 text-white  bg-black/40 rounded-full p-4">
        <FaRegHeart className="cursor-pointer" />

        <FaRegBookmark className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Archive;
