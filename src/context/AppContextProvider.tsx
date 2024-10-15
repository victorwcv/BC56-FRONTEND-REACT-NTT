import { useReducer, useEffect, ReactNode } from "react";
import { AppContext } from "./appContext";
import { appReducer, initialState } from "./appReducer";
import { getAllProducts, getCategories } from "../services/apiCalls";

type Props = { children: ReactNode };

export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_PRODUCTS_START" });
      try {
        const products = await getAllProducts();
        if (!products) return;
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
      } catch (error) {
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: `API Error: ${error}`,
        });
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "FETCH_CATEGORIES_START" });
      try {
        const categories = await getCategories();
        if (!categories) return;
        dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categories });
        dispatch({
          type: "FILTER_PRODUCTS",
          payload: { category: "all", searchTerm: "" },
        });
      } catch (error) {
        dispatch({
          type: "FETCH_CATEGORIES_ERROR",
          payload: `API Error: ${error}`,
        });
      }
    };
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
