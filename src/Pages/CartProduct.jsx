import PropTypes from "prop-types";
import Rating from "react-rating";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

const CartProduct = ({ product, products, setProducts }) => {
  const { _id, productName, image, rating, description, price } = product;
  const ratingSize = 1.5;

  const { user } = useAuth();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/user-cart/${user?.uid}/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = products.filter((item) => item._id !== id);
              setProducts(remaining);
            }
          });
        Swal.fire(
          "Deleted!",
          "Your Product has been deleted from cart.",
          "success"
        );
      }
    });
  };
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="w-1/3">
        <img src={image} alt="" />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">{productName}</h1>
        <p className="mt-2 text-sm text-gray-600">
          {description && description.slice(0, 80)}
        </p>
        <div className="flex items-center my-2 justify-center md:justify-start gap-3">
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
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-xl font-bold mt-1 text-gray-700">৳{price}</h1>
          <button
            onClick={() => handleDelete(_id)}
            className="px-3 py-2 text-base font-bold bg-blue-700 text-white  rounded"
          >
            Delete from cart
          </button>
        </div>
      </div>
    </div>
  );
};
CartProduct.propTypes = {
  product: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
export default CartProduct;
