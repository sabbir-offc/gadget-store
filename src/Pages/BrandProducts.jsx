import { Link, useLoaderData } from "react-router-dom";

import Slider from "../Layout/Slider";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  const brandProducts = useLoaderData();

  return (
    <div>
      <div className="container mx-auto text-center">
        <Slider></Slider>
      </div>
      {brandProducts.length > 0 ? (
        <div className="grid md:grid-cols-2 my-10 gap-5 place-items-center">
          {brandProducts.map((product) => (
            <BrandProduct key={product._id} product={product}></BrandProduct>
          ))}
        </div>
      ) : (
        <div className=" mx-auto h-fit py-5 text-center">
          <h1 className="text-center text-3xl">
            {`Sorry, We don't have any product under this brand.`}
          </h1>
          <p className="text-lg my-2">But You can browse our another brands.</p>
          <Link to="/">
            <button className="px-4 py-3 text-white rounded-tr-lg rounded-bl-lg font-medium bg-[#FF7676]">
              Go Back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
