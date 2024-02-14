import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Archive from "../components/archive/Archive";
import { Button, Form, Input, Modal, message } from "antd";

import { BsInbox } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const ProfilePage = () => {
  const [isIndex, setIsIndex] = useState(1);
  const [isModalOpen, setIsModelOpen] = useState(false);

  const [user, setUser] = useState("");
  const [postCount, setPostCount] = useState([]);

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
        setUser(data);
        setPostCount(data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const onFinish = async (values) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/user/update-user",
        {
          method: "PUT",
          body: JSON.stringify({...values, userId: user.userId }),
          mode: "cors",
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      if (!res.ok) {
        message.error(
          "Kullanıcı güncelleme işlemi sırasında bir hata meydana geldi."
        );
        return;
      }

      message.success("Kullanıcı güncelleme işlemi başarılı.")

    } catch (error) {}
  };

  return (
    <div className="flex max-w-[1500px] mx-auto">
      <div className="w-1/4 h-screen max-lg:w-full max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:h-auto z-50 ">
        <Header />
      </div>
      <div className="w-3/4 flex flex-col max-lg:w-full max-lg:pb-14">
        <div className="w-full flex">
          <div className="w-2/6 bg-gray-500 flex justify-center items-center p-4">
            <div className="p-4 max-md:p-0">
              <img
                src={user.userImg}
                alt=""
                className="w-full h-44 object-cover rounded-full max-md:h-20 "
              />
            </div>
          </div>
          <div className="w-4/6 bg-red-400 p-4 flex flex-col gap-5">
            <div className="flex gap-5 max-md:gap-2 justify-start items-center">
              <span className="font-bold text-2xl max-md:text-base">{user.userName}</span>
              <Button type="primary" size="small" onClick={() => setIsModelOpen(true)}>
                Profili Düzenle
              </Button>
              <Modal
                title="Profili Düzenle"
                open={isModalOpen}
                onCancel={() => setIsModelOpen(false)}
                footer={false}
              >
                <Form initialValue={user} layout="vertical" onFinish={onFinish}>
                  <Form.Item label="Kullanıcı Adı" name="userName">
                    <Input defaultValue={user.userName} />
                  </Form.Item>
                  <Form.Item label="Profil Fotoğrafı" name="userImg">
                    <Input
                      defaultValue={user.userImg}
                    />
                    
                  </Form.Item>
                  <Form.Item className="flex justify-end mb-0">
                    <Button type="primary" htmlType="submit" onClick={() => setIsModelOpen(false)} >
                      Kaydet
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>

            <div className="flex gap-5 text-lg max-lg:gap-2 max-lg:text-sm ">
              <span>{user.posts ? postCount.length : 0} Gönderi</span>
              <span>{user.followerCount ? user.followerCount : 0} Takipçi</span>
              <span>{user.followCount ? user.followCount : 0} Takip</span>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-900 flex text-white justify-evenly items-center text-3xl p-4">
          <span
            onClick={() => setIsIndex(1)}
            className={`px-28 py-1 hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
              isIndex === 1 && "bg-white/20"
            }`}
          >
            <BsInbox />
          </span>
          <span
            onClick={() => setIsIndex(2)}
            className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
              isIndex === 2 && "bg-white/20"
            }`}
          >
            <BsBookmark />
          </span>
          <span
            onClick={() => setIsIndex(3)}
            className={`px-28 py-1  hover:bg-white/20 rounded-3xl transition-all duration-500 cursor-pointer max-md:px-10 ${
              isIndex === 3 && "bg-white/20"
            }`}
          >
            <MdOutlinePersonPin />
          </span>
        </div>

        {isIndex === 1 && (
          <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] lg:h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4 max-md:max-h-[calc(100vh-_60px)] ">
            <Archive />
            <Archive />
            <Archive />
            <div className="w-full h-full bg-white/20 flex justify-center items-center text-4xl cursor-pointer min-h-[100px]">
              <FaPlus />
            </div>
          </div>
        )}

        {isIndex === 2 && (
          <div className="w-full bg-slate-800 max-h-[calc(100vh-_310px)] h-full p-4 grid grid-custom-css-profile-page gap-x-4 gap-y-8 overflow-y-auto pb-4">
            <Archive />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
