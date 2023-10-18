import PropTypes from "prop-types";
import Rating from "../Layout/Rating";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Product = ({ product }) => {
  useEffect(() => {
    AOS.init();
    window.scroll(0, 0);
  }, []);
  const { image, productName, brandName, price, productType, rating } = product;
  return (
    <div
      data-aos="fade-up-right"
      className="w-2/4 flex flex-col items-center justify-center p-5 rounded shadow-lg"
    >
      <img
        src={image}
        alt={`image of this product ${productName}`}
        className="h-52"
      />
      <h2 className="text-2xl md:text-3xl text-center font-semibold">
        {productName}
      </h2>
      <div className="flex gap-5 mt-5">
        <p className="text-lg font-medium">Brand: {brandName}</p>
        <p className="text-lg font-medium">Price: {price} ৳</p>
      </div>
      <p className="text-xl font-semibold">Category: {productType}</p>
      <div className="flex items-center gap-2 mt-2">
        <h5 className="text-lg font-medium mt-1">Rating:</h5>{" "}
        <Rating rating={parseInt(rating)} />
      </div>
      <Link>
        <button className="bg-[#4D2DB7] p-3 text-white font-semibold rounded mt-3">
          Show Details
        </button>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
