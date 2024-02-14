import React, { useEffect, useState } from "react";
import { Input } from "antd";
import AsideProfiles from "./AsideProfiles";
import "./Aside.css";
const { Search } = Input;

const Aside = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_SERVER_URL + "/user/get-all"
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <Search
        placeholder="Search a profile"
        allowClear
        onSearch={onSearch}
        className=""
        size="large"
      />

      <div className="grid grid-custom-css-lg max-lg:grid-custom-css-md gap-2 place-items-center mt-4 px-5">
        {users.map((item) => (
          <AsideProfiles item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Aside;
