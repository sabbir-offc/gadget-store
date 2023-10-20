import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Rating from "react-rating";
const BrandProduct = ({ product }) => {
  useEffect(() => {
    //aos
    AOS.init();
    //scrolling to the top
    window.scroll(0, 0);
  }, []);
  //rating size
  const ratingSize = 1.5;

  //product details
  const { _id, image, productName, brandName, price, productType, rating } =
    product;
  return (
    <div
      data-aos="fade-up-right"
      className="lg:w-2/4 flex flex-col items-center justify-center p-5 rounded shadow-lg"
    >
      <img
        src={image}
        alt={`image of this product ${productName}`}
        className="h-52 mb-3"
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
        <h5 className="text-lg font-medium ">Rating:</h5>
        <Rating
          initialRating={rating}
          emptySymbol={
            <i
              className="far fa-star fa-1.5x"
              style={{ fontSize: `${ratingSize}em`, color: "lightgray" }}
            />
          }
          fullSymbol={
            <i
              className="fas fa-star fa-1.5x"
              style={{ fontSize: `${ratingSize}em`, color: "skyblue" }}
            />
          }
          readonly
        />
      </div>
      <div className="flex items-center gap-5">
        <Link to={`/products/${_id}`}>
          <button className="bg-[#4D2DB7] p-3 text-white font-semibold rounded mt-3">
            Show Details
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button className="bg-[#FF4B91] p-3 text-white font-semibold rounded mt-3">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

BrandProduct.propTypes = {
  product: PropTypes.object,
};
export default BrandProduct;
