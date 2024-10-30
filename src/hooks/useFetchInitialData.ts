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
        if (!products) return;
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      dispatch({ type: "FETCH_CATEGORIES_START" });
      try {
        const categories = await getCategories();
        if (!categories) return;
        dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categories });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [dispatch]);
};
