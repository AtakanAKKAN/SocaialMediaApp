import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Archive from "../components/archive/Archive";
import { Button } from "antd";

import { BsInbox } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const ProfilePage = () => {
  const [isIndex, setIsIndex] = useState(1);

  const [user, setUser] = useState("");
  const [postCount, setPostCount] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userId = JSON.parse(localStorage.getItem("secretUserId")).userId;

      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL +
            `/user/get-an-user?userId=${userId}`
        );

        if (!res.ok) {
          console.log("error");
          return;
        }

        const data = await res.json();
        setUser(data);
        setPostCount(data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="flex max-w-[1500px] mx-auto">
      <div className="w-1/4 h-screen">
        <Header />
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex">
          <div className="w-2/6 bg-gray-500 flex justify-center items-center p-4">
            <div className="p-4">
              <img
                src={user.userImg}
                alt=""
                className="w-44 h-44 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-4/6 bg-red-400 p-4 flex flex-col gap-5">
            <div className="flex gap-5 justify-start items-center px-5">
              <span className="font-bold text-2xl">{user.userName}</span>
              <Button type="primary">Profili Düzenle</Button>
            </div>

            <div className="flex gap-5 px-5 text-lg">
              <span>{user.posts ? postCount.length : 0} Gönderi</span>
              <span>{user.followerCount ? user.followerCount : 0} Takipçi</span>
              <span>{user.followCount ? user.followCount : 0} Takip</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-900 flex text-white justify-evenly items-center text-3xl p-4">
          <span
            onClick={() => setIsIndex(1)}
            className={`px-28 py-1 hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer ${
              isIndex === 1 && "bg-white/20"
            }`}
          >
            <BsInbox />
          </span>
          <span
            onClick={() => setIsIndex(2)}
            className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer ${
              isIndex === 2 && "bg-white/20"
            }`}
          >
            <BsBookmark />
          </span>
          <span
            onClick={() => setIsIndex(3)}
            className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer ${
              isIndex === 3 && "bg-white/20"
            }`}
          >
            <MdOutlinePersonPin />
          </span>
        </div>

        {isIndex === 1 && (
          <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4 ">
            <Archive />
            <Archive />
            <Archive />
            <div className="w-full h-full bg-white/20 flex justify-center items-center text-4xl cursor-pointer min-h-[100px]">
              <FaPlus />
            </div>
          </div>
        )}

        {isIndex === 2 && (
          <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4">
            <Archive />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
