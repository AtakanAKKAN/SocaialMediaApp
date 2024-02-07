import React from "react";

const AsideProfiles = ({ item }) => {
  return (
    <div
      className="w-36 h-44 flex flex-col gap-2 items-center p-2 border rounded bg-[#FFF4E6] cursor-pointer select-none"
      key={item._id}
    >
      <img
        src={item.userImg || "images/Blank-Avatar.png"}
        alt="profile-img"
        className="w-20 h-20 object-cover rounded-full"
      />
      <p className="font-bold text-base whitespace-normal overflow-hidden text-ellipsis" title={item.userName} >
        {item.userName}
      </p>
      <p className="text-sm">{item.followerCount || 0} Followers</p>
    </div>
  );
};

export default AsideProfiles;
