import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

type Props = {
  children: JSX.Element;
};
const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
