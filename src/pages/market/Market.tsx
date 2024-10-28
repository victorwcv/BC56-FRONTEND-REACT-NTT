import styles from "./Market.module.css";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import { Outlet } from "react-router-dom";
import { useAppState } from "../../hooks/useAppState";
import { useFetchAppData } from "../../hooks/useFetchAppData";

const Market: React.FC = () => {
  
  useFetchAppData();

  const {
    state: {
      cartItems,
      user: { data },
    },
  } = useAppState();

  return (
    <div className={styles.market}>
      <TopBar cartItemsLength={cartItems.length} user={data} handleLogout={() => {}} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Market;
