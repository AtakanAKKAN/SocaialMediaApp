import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ProductItems = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);

  const LikeHandler = () => {
    if (isLiked === false) {
      const likeCountChange = likeCount + 1;
      setLikeCount(likeCountChange);
    } else {
      const likeCountChange = likeCount - 1;
      setLikeCount(likeCountChange);
    }
  };

  return (
    <div className="w-[650px] flex flex-col gap-2 rounded-lg bg-[#F8E2C5] overflow-hidden shadow-lg">
      <div className="w-full px-7 flex justify-between items-center pt-2">
        <div className="flex gap-2 justify-center items-center ">
          <img
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-8 h-8 object-cover rounded-full"
          />
          <span>Kullanıcı Adı</span>
        </div>

        <div className="cursor-pointer">
          <BsThreeDots />
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1575399872095-9363bf262e64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="title"
        className="w-full h-72 object-cover"
      />

      <div className="flex justify-between items-center px-5 mb-4 text-xl">
        <span className="flex items-center">
          <div
            className={`HeartAnimation ${isLiked && "animate"}`}
            onClick={() => {
              setIsLiked(!isLiked);
              LikeHandler();
            }}
          ></div>{" "}
          {likeCount}
        </span>
        <span>
          <svg
            aria-label="Kaydet"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Kaydet</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
          <svg
            aria-label="Kaldır"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Kaldır</title>
            <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ProductItems;
