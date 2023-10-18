import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import Slider from "../Layout/Slider";

const BrandProducts = () => {
  const brandProducts = useLoaderData();

  return (
    <div>
      <div className="container mx-auto text-center">
        <Slider></Slider>
      </div>
      <div className="grid md:grid-cols-2 my-10 gap-5 place-items-center">
        {brandProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
