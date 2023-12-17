import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxios";

const useCart = () => {
  const { user } = useAuth();
  const {
    data: loadedProducts,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["usercart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user-cart?email=${user?.email}`, {
        credentials: "include",
      });
      return await data;
    },
  });
  return { loadedProducts, error, isLoading, refetch };
};

export default useCart;
