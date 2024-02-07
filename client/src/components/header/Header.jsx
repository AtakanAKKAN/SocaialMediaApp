import React, { useEffect, useState } from "react";
import { GiPeanut } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("secretUserId")) {
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
        } catch (error) {
          console.log(error);
        }
      };

      getUser();
    } else {
      return;
    }
  }, []);

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

        {localStorage.getItem("secretUserId") ? (
          <Link to={"/profile"} className="flex items-center gap-2 text-2xl">
            <IoPersonOutline /> Profil
          </Link>
        ) : (
          <Link to={"/login"} className="flex items-center gap-2 text-2xl">
            <IoPersonOutline /> Profil
          </Link>
        )}

        {localStorage.getItem("secretUserId") ? (
          <Link
            to={"/login"}
            className="flex items-center gap-2 text-2xl"
            onClick={logOut}
          >
            <IoPersonOutline /> Çıkış
          </Link>
        ) : (
          <Link to={"/login"} className="flex items-center gap-2 text-2xl">
            <IoPersonOutline /> Giriş
          </Link>
        )}
      </div>

      {localStorage.getItem("secretUserId") && (
        <div className="w-full h-20 hover:bg-[#642900] mt-auto flex justify-between items-center px-5 rounded-2xl transition-all duration-300 cursor-pointer bg-[#642900]/40 ">
          <img
            src={user.userImg}
            alt=""
            className="w-16 h-16 object-cover rounded-full"
          />

          <div className="flex flex-col">
            <span className="font-bold text-xl">{user.userName}</span>
            <small className="text-xs">{user.email}</small>
          </div>

          <div>
            <BsThreeDots />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
