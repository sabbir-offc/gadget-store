import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useUserInfo from "../hook/useUserInfo";
import useAuth from "../hook/useAuth";
import { RiseLoader } from "react-spinners";

const AdminRoute = ({ children }) => {
  const { userInfo, isLoading } = useUserInfo();
  const { loading } = useAuth();
  if (loading || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RiseLoader color="#2b2eb8" />
      </div>
    );
  }
  if (userInfo?.role === "admin") {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
