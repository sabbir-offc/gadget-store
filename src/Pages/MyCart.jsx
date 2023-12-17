import CartProduct from "./CartProduct";
import useCart from "../hook/useCart";
import Loader from "../components/Loader";
const MyCart = () => {
  const { loadedProducts, isLoading, refetch } = useCart();

  if (isLoading) return <Loader />;
  return (
    <div className="my-20 container mx-auto min-h-(calc(100vh-400px)) w-full">
      {loadedProducts?.length > 0 ? (
        <div className="grid md:grid-cols-2 place-items-center  gap-5">
          {loadedProducts &&
            loadedProducts?.map((product) => (
              <CartProduct
                key={product._id}
                product={product}
                refetch={refetch}
              ></CartProduct>
            ))}
        </div>
      ) : (
        <section className=" px-5 py-12 lg:px-20">
          <div className="w-full text-blue-600 border rounded-lg shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 mx-auto">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-4 icon icon-tabler icon-tabler-alert-triangle"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  <polyline points="11 12 12 12 12 16 13 16"></polyline>
                </svg>
                <p className="text-sm mt-1 text-center font-semibold tracking-wide uppercase">
                  <strong>Note:</strong>{" "}
                  {`You haven't added any product to your cart.`}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyCart;
