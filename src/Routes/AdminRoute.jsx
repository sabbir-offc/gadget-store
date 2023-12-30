import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useUserInfo from "../hook/useUserInfo";
import useAuth from "../hook/useAuth";
import Loader from "../components/Loader";

const AdminRoute = ({ children }) => {
  const { userInfo, isLoading } = useUserInfo();
  const { loading } = useAuth();
  if (loading || isLoading) <Loader />;
  if (userInfo?.role === "admin") return children;

  return <Navigate to="/signin"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
