import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { addToCart } from "../api/user";
const ProductDetails = () => {
  const { data: product } = useLoaderData();
  const { user } = useAuth();
  const windowScoll = 0;
  useEffect(() => {
    window.scroll(0, windowScoll);
  }, [windowScoll]);
  const {
    productName,
    brandName,
    rating,
    image,
    description,
    productType,
    price,
  } = product;

  //rating size
  const ratingSize = 1.5;

  //product cart button
  const handleAddCart = async () => {
    const cartProduct = {
      productName,
      brandName,
      rating,
      image,
      description,
      productType,
      price,
      userEmail: user?.email,
      userName: user?.displayName,
      userId: user?.uid,
    };
    if (user) {
      const data = await addToCart(cartProduct);
      if (data.acknowledged) {
        Swal.fire(
          "Thank you!",
          "Your product added successfully to your cart.",
          "success"
        );
      }
    } else {
      Swal.fire(
        "Error!",
        "You need to login your account for adding a product ",
        "error"
      );
    }
  };
  return (
    <div className="container mx-auto shadow-lg my-10">
      <div className="grid md:grid-cols-5 py-5 rounded-md">
        <div className="md:col-span-3">
          <img
            src={image}
            alt={`image of the ${productName}`}
            className="w-2/4 mx-auto"
          />
        </div>
        <div className=" space-y-4 text-center flex flex-col justify-center md:text-left p-4 h-full md:col-span-2">
          <h2 className="text-2xl md:text-4xl">{productName}</h2>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <p className="text-lg">Rating: </p>
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
                  style={{ fontSize: `${ratingSize}em`, color: "#FF4B91" }}
                />
              }
              readonly
            />
          </div>
          <p className="text-lg">
            Brand:
            <span className="font-bold"> {brandName}</span>
          </p>
          <p className="text-lg text-blue-400 font-bold">৳ {price}</p>
          <p className="text-lg">
            Category: <span className="font-medium">{productType}</span>
          </p>
          <button
            onClick={handleAddCart}
            className="bg-blue-700 mx-auto md:mx-0 w-fit text-white px-4 py-3 rounded-tl-lg rounded-br-lg font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="px-5 py-3 mt-5">
        <p className="text-xl font-bold mb-4 whitespace-nowrap">Description:</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
