import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");

  if (!token || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Allow only normal users
  if (user?.role !== "user") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
