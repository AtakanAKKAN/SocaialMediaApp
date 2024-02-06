import React from "react";
import { GiPeanut } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col text-white gap-5 p-4 w-full min-w-[250px] h-full">
      <GiPeanut className=" text-4xl" />
      <div className="flex flex-col gap-4">
        <Link to={"/"} className="flex items-center gap-2 text-2xl">
          <TiHome /> Anasayfa
        </Link>

        <Link className="flex items-center gap-2 text-2xl">
          <IoSearchSharp /> Keşfet
        </Link>

        <Link to={"/profile"} className="flex items-center gap-2 text-2xl">
          <IoPersonOutline /> Profil
        </Link>
        <Link to={"/register"} className="flex items-center gap-2 text-2xl">
          <IoPersonOutline /> Giriş
        </Link>
      </div>

      <div className="w-full h-20 hover:bg-[#642900] mt-auto flex justify-between items-center px-5 rounded-2xl transition-all duration-300 cursor-pointer bg-[#642900]/40 ">
        <img
          src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />

        <div className="flex flex-col">
          <span className="font-bold text-xl">Kullanıcı Adı</span>
          <small className="text-xs">Kullanıcı e-postası</small>
        </div>

        <div>
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Header;
