import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Product from "../components/main/Product";
import Aside from "../components/aside/Aside";
import TopHeader from "../components/TopHeader/TopHeader";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const userId = JSON.parse(localStorage.getItem("secretUserId"))?.userId;

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
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="w-full bg-black/70 p-2 max-md:fixed z-50 lg:hidden  ">
        <TopHeader user={user} />
      </div>

      <div className="flex justify-between lg:gap-4 px-1 max-md:px-0 gap-0 pt-2 max-md:pt-16 ">
        <div className="lg:w-2/12 lg:h-[calc(100vh-_20px)] w-full max-lg:fixed max-lg:bottom-0 max-lg:left-0 z-50 max-lg:right-0">
          <Header user={user} />
        </div>

        <div className="lg:w-7/12 max-h-[calc(100vh-_10px)] max-lg:w-9/12 max-md:w-full max-md:pb-10 overflow-y-auto ">
          <Product />
        </div>
        <div className="lg:w-3/12 max-lg:w-3/12 max-md:hidden ">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
