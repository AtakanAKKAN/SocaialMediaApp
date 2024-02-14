import { Image } from "antd";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";

const ProductItems = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(product.likeQuantity);

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
    <div
      className="w-[650px] max-lg:w-[550px] max-md:w-full flex flex-col gap-2 rounded-lg bg-[#F8E2C5] overflow-hidden shadow-lg"
      key={product._id}
    >
      <div className="w-full px-5 flex justify-between items-center pt-2">
        <div className="flex gap-2 justify-center items-center ">
          <img
            src={
              "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            className="w-9 h-9 object-cover rounded-full"
          />
          <span>Kullanıcı Adı</span>
        </div>

        <div className="cursor-pointer">
          <BsThreeDots />
        </div>
      </div>

      <Image src={product.img} alt="title" className="max-w-full h-72 object-cover" height="288px" />

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
          <FaRegBookmark />
        </span>
      </div>
    </div>
  );
};

export default ProductItems;
