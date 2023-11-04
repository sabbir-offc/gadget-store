import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const adminEmail = import.meta.env.VITE_ADMIN;
  const { user } = useAuth();

  if (user?.email === adminEmail) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
