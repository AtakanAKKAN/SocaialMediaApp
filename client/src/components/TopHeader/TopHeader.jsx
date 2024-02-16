import { GiPeanut } from "react-icons/gi";

const TopHeader = ({ user }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <img
        src={user?.userImg || "images/Blank-Avatar.png"}
        alt={user.userName}
        className="w-10 h-10 object-cover rounded-full"
      />

      <span className="text-2xl text-white whitespace-normal tracking-wider font-bold">
        PEANUT
      </span>

      <span className="text-4xl text-white">
        <GiPeanut />
      </span>
    </div>
  );
};

export default TopHeader;
