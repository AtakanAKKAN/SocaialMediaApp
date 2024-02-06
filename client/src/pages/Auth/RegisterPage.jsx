import React from "react";
import { Button, Form, Input } from "antd";
import { GiPeanut } from "react-icons/gi";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="max-w-[1500px] px-4 pt-16 flex flex-col mx-auto gap-4">
      <div className="w-full flex flex-col justify-center items-center text-[#3C1900]">
        <GiPeanut className="text-9xl" />
        <span className="text-4xl">Sofraya Bir Kaşık Daha!</span>
      </div>
      <Form
        autoComplete="off"
        layout="vertical"
        className="max-w-[768px] w-full mx-auto"
      >
        <Form.Item
          label="Kullanıcı Adı"
          name={"userName"}
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
          label="E-posta"
          name={"email"}
          rules={[
            {
              required: true,
              message: "E-posta alanı zorunludur!",
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
        <Form.Item
          label="Sifre Tekrar"
          name={"passwordAgain"}
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Şifre Doğrulama alanı zorunludur!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Girdiğiniz şifreler eşleşmiyor!!")
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="sumbit" className="w-full">
            Kaydol
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-center gap-1 text-xl">
            Bir hesabınız mı var?{" "}
            <Link to={"/login"} className="text-blue-600">
              Şimdi giriş yapınız
            </Link>{" "}
          </div>
    </div>
  );
};

export default RegisterPage;
