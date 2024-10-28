import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";
import { useGetLocalUser } from "../hooks/useGetLocalUser";

function PrivateRoute() {
  useGetLocalUser();
  
  const {
    state: { user: { data, loading } },
  } = useAppState();

  if (loading) {
    return null;
  }

  return data ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
