import { useEffect } from "react";
import { useAppState } from "./useAppState";
import { getAllProducts, getCategories } from "../services/market.service";

export const useFetchInitialData = () => {
  const { dispatch } = useAppState();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: "FETCH_PRODUCTS_START" });
      try {
        const products = await getAllProducts(0, 0);
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({
          type: "FETCH_PRODUCTS_ERROR",
          payload: error instanceof Error ? error.message : "Error desconocido",
        });
      }
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "FETCH_CATEGORIES_START" });
      try {
        const categories = await getCategories();
        dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categories });
      } catch (error) {
        console.error("Error fetching categories:", error);
        dispatch({
          type: "FETCH_CATEGORIES_ERROR",
          payload: error instanceof Error ? error.message : "Error desconocido",
        });
      }
    };
    fetchCategories();
  }, [dispatch]);
};
