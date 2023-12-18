import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../hook/useAxios";
import UsersListTable from "../../../components/Table/UsersListTable";

const ManageUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["loadUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure("/users");
      return await data;
    },
  });
  return (
    <div>
      <UsersListTable users={users} />
    </div>
  );
};

export default ManageUsers;
