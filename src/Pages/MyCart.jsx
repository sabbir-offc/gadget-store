import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const useProduct = useLoaderData();
  console.log(useProduct);
  return <div></div>;
};

export default MyCart;
