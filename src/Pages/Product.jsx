import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { image, productName } = product;
  return (
    <div className="w-2/4 flex flex-col items-center justify-center p-5 rounded shadow-md">
      <img
        src={image}
        alt={`image of this product ${productName}`}
        className="w-60"
      />
      <h2 className="text-2xl md:text-3xl text-center font-semibold">
        {productName}
      </h2>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
