import React from "react";
import { Input } from "antd";
import AsideProfiles from "./AsideProfiles";
import "./Aside.css";
const { Search } = Input;

const Aside = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <Search
        placeholder="Search a profile"
        allowClear
        onSearch={onSearch}
        className=""
        size="large"
      />

      <div className="grid grid-custom-css gap-2 place-items-center mt-4 px-5">
        <AsideProfiles />
        <AsideProfiles />
        <AsideProfiles />
        <AsideProfiles />
      </div>
    </div>
  );
};

export default Aside;
