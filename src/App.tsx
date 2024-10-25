import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
import { useFetchAppData } from "./hooks/useFetchAppData";
import { useCartItems } from "./hooks/useCartItems";
function App() {
  useFetchAppData();
  const cartItems = useCartItems();

  return (
    <>
      <TopBar cartItemsLength={cartItems.length} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
