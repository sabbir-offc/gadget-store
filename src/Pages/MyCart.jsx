import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {
  const userProduct = useLoaderData();
  const [products, setProducts] = useState(userProduct);
  return (
    <div className="my-20">
      <div className="container mx-auto grid md:grid-cols-2 place-items-center  gap-5">
        {products &&
          products?.map((product) => (
            <CartProduct
              key={product._id}
              product={product}
              products={products}
              setProducts={setProducts}
            ></CartProduct>
          ))}
      </div>
    </div>
  );
};

export default MyCart;
