import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const BrandProducts = () => {
  const brandProducts = useLoaderData();

  return (
    <div className="grid grid-cols-2 gap-5 place-items-center">
      {brandProducts.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default BrandProducts;
