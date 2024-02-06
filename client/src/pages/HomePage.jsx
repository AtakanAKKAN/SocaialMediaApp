import React from "react";
import Header from "../components/header/Header";
import Product from "../components/main/Product";
import Aside from "../components/aside/Aside";

const HomePage = () => {
  return (
    <div className="flex justify-between pt-5 max-w-[1500px] mx-auto gap-4">
      <div className="w-1/4 min-h-[calc(100vh-_20px)]">
        <Header />
      </div>

      <div className="w-2/4 min-h-[calc(100vh-_20px)] overflow-x-auto">
        <Product />
      </div>
      <div className="w-1/4">
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;
