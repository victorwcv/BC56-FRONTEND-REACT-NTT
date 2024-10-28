import { Navigate, Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useAppState } from "../hooks/useAppState";
import { useFetchAppData } from "../hooks/useFetchAppData";

function PrivateRoute() {
  useFetchAppData();
  const { state } = useAppState();
  const { cartItems } = state;
  const { user } = state;

  if (user === null) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <TopBar
        cartItemsLength={cartItems.length}
        user={user}
        handleLogout={() => {}}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrivateRoute;
