import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Product from "../components/main/Product";
import Aside from "../components/aside/Aside";


const HomePage = () => {
  const [userName, setUserName] = useState("");

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
        setUserName(data)
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="flex justify-between pt-5 max-w-[1500px] mx-auto gap-4">
      <div className="w-1/4 h-[calc(100vh-_38px)]">
        <Header userName={userName}  />
      </div>

      <div className="w-2/4 max-h-[calc(100vh-_20px)] overflow-x-auto">
        <Product />
      </div>
      <div className="w-1/4">
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;
