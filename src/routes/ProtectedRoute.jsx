import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
