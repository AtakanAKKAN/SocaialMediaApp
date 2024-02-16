import React, { useEffect, useState } from "react";
import { GiPeanut } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoSearchSharp ,IoPersonOutline} from "react-icons/io5";
import { BiLogInCircle, BiLogOutCircle  } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = ({user}) => {
  

  const navigate = useNavigate();

  // const userSSSS = JSON.parse(localStorage.getItem("secretUserId"));

  // console.log(localStorage.getItem("secretUserId"));

  const logOut = () => {
    if (window.confirm("Çıkış yapmak istediğinizden emin misiniz?")) {
      localStorage.removeItem("secretUserId");
      message.success("Çıkış yapıldı");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  console.log(user)

  return (
    <div className="flex lg:flex-col text-white gap-5 p-4 lg:w-full lg:min-w-[250px] lg:h-full w-full max-lg:gap-[2vw] z-50 max-lg:bg-[#3C1900]/80 ">
      <GiPeanut className=" text-4xl max-lg:hidden " />
      <div className="flex lg:flex-col gap-4 max-lg:w-full max-lg:justify-between ">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-2xl max-sm:text-4xl"
        >
          <FaHome /> <span className="max-sm:hidden">Anasayfa</span>
        </Link>

        <Link className="flex items-center gap-2 text-2xl max-sm:text-4xl">
          <IoSearchSharp /> <span className="max-sm:hidden">Keşfet</span>
        </Link>

        {localStorage.getItem("secretUserId") ? (
          <Link
            to={"/profile"}
            className="flex items-center gap-2 text-2xl max-sm:text-4xl"
          >
            <IoPersonOutline /> <span className="max-sm:hidden">Profil</span>
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="flex items-center gap-2 text-2xl max-sm:text-4xl"
          >
            <IoPersonOutline /> <span className="max-sm:hidden">Profil</span>
          </Link>
        )}

        {localStorage.getItem("secretUserId") ? (
          <Link
            to={"/login"}
            className="flex items-center gap-2 text-2xl max-sm:text-4xl"
            onClick={logOut}
          >
            <BiLogOutCircle /> <span className="max-sm:hidden">Çıkış</span>
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="flex items-center gap-2 text-2xl max-sm:text-4xl"
          >
            <BiLogInCircle /> <span className="max-sm:hidden">Giriş</span>
          </Link>
        )}
      </div>
      {localStorage.getItem("secretUserId") && user && (
        <div className="w-full lg:h-20 hover:bg-[#642900] lg:mt-auto flex justify-between items-center lg:px-5 px-1 py-2 rounded-2xl transition-all duration-300 cursor-pointer bg-[#642900]/40 max-lg:hidden">
          <img
            src={user?.userImg || "images/Blank-Avatar.png"}
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />

          <>
            <div className="flex flex-col">
              <span className="font-bold text-xl">{user?.userName}</span>
              <small className="text-xs">{user?.email}</small>
            </div>

            
          </>
        </div>
      )}
    </div>
  );
};

export default Header;
