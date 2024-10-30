import { useNavigate } from "react-router-dom";
import { useAppState } from "../hooks/useAppState";
import { useFetchAppData } from "../hooks/useFetchAppData";
import { useGetLocalCartItems } from "../hooks/useGetLocalCartItems";
import { clearLocalStore } from "../utils/localStore";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const MarketLayout: React.FC<Props> = ({ children }) => {
  useFetchAppData();
  useGetLocalCartItems();
  const {
    state: {
      cartItems,
      user: { data },
      products,
      categories,
    },
  } = useAppState();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    clearLocalStore();
  };

  if (products.length === 0 || categories.length === 0) {
    return null;
  }

  return (
    <>
      <TopBar
        cartItemsLength={cartItems.length}
        username={data?.username}
        handleLogout={handleLogout}
      />
      {children}
      <Footer />
    </>
  );
};

export default MarketLayout;
