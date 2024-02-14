import React from "react";
import { Button, Form, Input, message } from "antd";
import { GiPeanut } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/user/login",
        {
          method: "POST",
          body: JSON.stringify(values),
          mode: "cors",
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      if (res.status === 404) {
        message.error("Kullanıcı bulunamadı!");
        return;
      }

      if (res.status === 403) {
        message.error("Şifre yanlış!");
        return;
      }

      const user = await res.json();
      message.success("Giriş işlemi başarılı.");

      setTimeout(() => {
        navigate("/");
      }, 1000);

      localStorage.setItem(
        "secretUserId",
        JSON.stringify({
          userId: user._id,
          userName: user.userName,
          email: user.email,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1500px] px-4 pt-16 flex flex-col mx-auto gap-4">
      <div className="w-full flex flex-col justify-center items-center text-[#3C1900]">
        <GiPeanut className="text-9xl" />
        <span className="text-4xl font-bold">Hoşgeldin!</span>
      </div>
      <Form
        autoComplete="off"
        layout="vertical"
        className="max-w-[768px] w-full mx-auto"
        onFinish={onFinish}
      >
        <Form.Item
          label="E-posta"
          name={"email"}
          rules={[
            {
              required: true,
              message: "Kulanıcı adı alanı zorunludur!",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Sifre"
          name={"password"}
          rules={[
            {
              required: true,
              message: "Şifre alanı zorunludur!",
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="sumbit" className="w-full">
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-center gap-1 text-xl">
        Bir hesabınız yok mu?{" "}
        <Link to={"/register"} className="text-blue-600">
          Şimdi kaydolun
        </Link>{" "}
      </div>
    </div>
  );
};

export default LoginPage;
