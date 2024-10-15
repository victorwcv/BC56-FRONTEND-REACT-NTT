import { useState, useEffect } from "react";
import { routes } from "./routes";
import ErrorPage from "../pages/errorPage/ErrorPage";

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const Component = routes[currentPath] || ErrorPage;

  return <Component />;
};

export default Router;
