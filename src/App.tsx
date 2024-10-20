import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
