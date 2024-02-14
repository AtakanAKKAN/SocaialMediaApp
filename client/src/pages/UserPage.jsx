import { message } from "antd";
import Header from "../components/header/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Archive from "../components/archive/Archive";

import { MdOutlinePersonPin } from "react-icons/md";
import { BsBookmark, BsInbox } from "react-icons/bs";


const UserPage = () => {
  const [userProfile, setUserProfile] = useState();
  const [isIndex, setIsIndex] = useState(1);

  const { _id } = useParams();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + `/user/get-an-user?userId=${_id}`
        );

        if (!res.ok) {
          message.error("Profile Ulaşılamıyor.");
          return <div>Loading...</div>;
        }

        const data = await res.json();
        setUserProfile(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProfile();
  }, [_id]);

  console.log(userProfile);

  return (
    <>
      {userProfile ? (
        <div className="flex max-w-[1500px] mx-auto">
          <div className="w-1/4 h-screen max-lg:w-full max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:h-auto z-50 ">
            <Header />
          </div>
          <div className="w-3/4 flex flex-col max-lg:w-full max-lg:pb-14">
            <div className="w-full flex">
              <div className="w-2/6 bg-gray-500 flex justify-center items-center p-4">
                <div className="p-4 max-md:p-0">
                  <img
                    src={userProfile.userImg || "images/Blank-Avatar.png" }
                    alt=""
                    className="w-full h-44 object-cover rounded-full max-md:h-20 "
                  />
                </div>
              </div>
              <div className="w-4/6 bg-red-400 p-4 flex flex-col gap-5">
                <div className="flex gap-5 max-md:gap-2 justify-start items-center">
                  <span className="font-bold text-2xl max-md:text-base">
                    {userProfile.userName}
                  </span>
                </div>

                <div className="flex gap-5 text-lg max-lg:gap-2 max-lg:text-sm ">
                  <span>0 Gönderi</span>
                  <span>
                    {userProfile.followerCount ? userProfile.followerCount : 0}{" "}
                    Takipçi
                  </span>
                  <span>
                    {userProfile.followCount ? userProfile.followCount : 0}{" "}
                    Takip
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full bg-slate-900 flex text-white justify-evenly items-center text-3xl p-4">
              <span
                onClick={() => setIsIndex(1)}
                className={`px-28 py-1 hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
                  isIndex === 1 && "bg-white/20"
                }`}
              >
                <BsInbox />
              </span>
              <span
                onClick={() => setIsIndex(2)}
                className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
                  isIndex === 2 && "bg-white/20"
                }`}
              >
                <BsBookmark />
              </span>
              <span
                onClick={() => setIsIndex(3)}
                className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
                  isIndex === 3 && "bg-white/20"
                }`}
              >
                <MdOutlinePersonPin />
              </span>
            </div>

            {isIndex === 1 && (
              <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] lg:h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4 max-md:max-h-[calc(100vh-_60px)] ">
                <Archive />
                <Archive />
                <Archive />
               
              </div>
            )}

            {isIndex === 2 && (
              <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4">
                <Archive />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default UserPage;
