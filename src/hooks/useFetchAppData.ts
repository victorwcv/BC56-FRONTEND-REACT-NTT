import { useEffect } from "react";
import { useAppState } from "./useAppState";
import { getAllProducts, getCategories } from "../services/market.service";

export const useFetchAppData = () => {
  const { dispatch } = useAppState();

  useEffect(() => {
    console.log("Fetching products...");

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
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Fetching categories...");
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
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
};
