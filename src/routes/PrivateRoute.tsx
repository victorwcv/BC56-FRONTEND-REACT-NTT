import { Navigate, Outlet } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";
import { useGetLocalUser } from "../hooks/useGetLocalUser";
import MarketLayout from "../layouts/MarketLayout";

const PrivateRoute = () => {
  useGetLocalUser();

  const {
    state: {
      user: { data, loading },
    },
  } = useAppState();

  if (loading) {
    return null;
  }

  return data ? (
    <MarketLayout>
      <Outlet />
    </MarketLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
