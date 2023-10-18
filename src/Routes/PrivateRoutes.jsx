import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
