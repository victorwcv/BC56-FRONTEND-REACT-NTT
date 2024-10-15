import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useAppState = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppState debe estar dentro de un AppProvider");
  }

  const { state, dispatch } = context;

  return { state, dispatch };
};

export default useAppState;
