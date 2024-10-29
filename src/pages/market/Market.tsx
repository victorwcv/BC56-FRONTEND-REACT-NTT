import styles from "./Market.module.css";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppState } from "../../hooks/useAppState";
import { clearLocalStore } from "../../utils/localStore";
import { useGetLocalCartItems } from "../../hooks/useGetLocalCartItems";
import { useFetchAppData } from "../../hooks/useFetchAppData";

const Market: React.FC = () => {
  useFetchAppData();
  useGetLocalCartItems();
  const {
    state: {
      cartItems,
      user: { data },
    },
  } = useAppState();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    clearLocalStore();
  };

  return (
    <div className={styles.market}>
      <TopBar
        cartItemsLength={cartItems.length}
        username={data?.username}
        handleLogout={handleLogout}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Market;
