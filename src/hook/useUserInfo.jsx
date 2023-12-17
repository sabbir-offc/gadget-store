import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const { user } = useAuth();
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", user],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return await data;
    },
  });
  return { userInfo, isLoading, refetch };
};

export default useUserInfo;
