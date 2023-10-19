import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import RiseLoader from "react-spinners/RiseLoader";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RiseLoader color="#2b2eb8" />;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
