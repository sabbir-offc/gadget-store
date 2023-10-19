import useAuth from "../hook/useAuth";

const UserEmail = () => {
  const { user } = useAuth();
  return user.email;
};

export default UserEmail;
