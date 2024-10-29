import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";
import { useGetLocalUser } from "../hooks/useGetLocalUser";
import { useFetchAppData } from "../hooks/useFetchAppData";
import { useGetLocalCartItems } from "../hooks/useGetLocalCartItems";

const PrivateRoute = () => {
  useFetchAppData();
  useGetLocalUser();
  useGetLocalCartItems();

  const {
    state: {
      user: { data, loading },
    },
  } = useAppState();

  if (loading) {
    return null;
  }

  return data ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
