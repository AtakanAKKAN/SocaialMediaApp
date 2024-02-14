import React, { useState } from "react";
import Header from "../components/header/Header";
import Product from "../components/main/Product";
import Aside from "../components/aside/Aside";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const getUser = async () => {
  //     const userId = JSON.parse(localStorage.getItem("secretUserId")).userId;

  //     try {
  //       const res = await fetch(
  //         process.env.REACT_APP_SERVER_URL +
  //           `/user/get-an-user?userId=${userId}`
  //       );

  //       if (!res.ok) {
  //         console.log("error");
  //         return;
  //       }

  //       const data = await res.json();
  //       setUserName(data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getUser();
  // }, []);

  return (
    <div className="flex justify-between pt-4 max-w-[1800px] mx-auto lg:gap-4 px-1 max-md:px-0 gap-0">
      <div className="lg:w-2/12 lg:h-[calc(100vh-_20px)] w-full max-lg:fixed max-lg:bottom-0 max-lg:left-0 ">
        <Header userName={userName} />
      </div>

      <div className="lg:w-7/12 lg:max-h-[calc(100vh-_20px)] max-lg:w-4/6 max-md:w-full ">
        <Product />
      </div>
      <div className="lg:w-3/12 max-lg:w-2/6 max-md:hidden ">
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;
