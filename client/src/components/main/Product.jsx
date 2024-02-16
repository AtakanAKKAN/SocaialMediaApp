import React, { useState } from "react";
import ProductItems from "./ProductItems";
import { message } from "antd";

import "./Product.css";

const Product = () => {
  const [post, setPost] = useState([]);

  useState(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + "/post/get-all");
        if (!res.ok) {
          message.error("HATA!!");
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-6 px-4 items-center mb-5 max-md:px-1">
      {post ? post.map((product) => (
        <React.Fragment key={product._id}>
        <ProductItems product={product} key={product._id} />
        <ProductItems product={product} key={product._id} />
        
        </React.Fragment>
      )) : <p>Burası Boş görünüyor Kaptan</p>}
    </div>
  );
};

export default Product;
