import React from "react";

const AsideProfiles = () => {
  return (
    <div className="w-36 flex flex-col gap-2 items-center p-2 border rounded whitespace-normal overflow-hidden text-ellipsis bg-[#FFF4E6] cursor-pointer select-none ">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile-img"
        className="w-20 h-20 object-cover rounded-full"
      />
      <p className="font-bold text-lg whitespace-normal overflow-hidden text-ellipsis">
        Mrs. Sümsük
      </p>
      <p className="text-sm">999 Followers</p>
    </div>
  );
};

export default AsideProfiles;
