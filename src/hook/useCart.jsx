import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useCart = () => {
  const { user } = useAuth();
  const { instance } = useAxios();
  console.log(instance);
  const {
    data: loadedProducts,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["usercart"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5001/user-cart?email=${user?.email}`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      return await response.json();
    },
  });
  return { loadedProducts, error, isLoading, refetch };
};

export default useCart;
