import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";

type PrivateRouteProps = {
  component: React.ReactNode;
};

const PrivateRoute = ({ component }: PrivateRouteProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? <>{component}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
