import React from "react";
import ProductItems from "./ProductItems";

import "./Product.css";

const Product = () => {
  return (
    <div className="flex flex-col gap-10 px-4 items-center overflow-x-auto mb-5">
      <ProductItems />
      <ProductItems />
    </div>
  );
};

export default Product;
