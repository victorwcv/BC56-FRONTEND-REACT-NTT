import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppAction } from "../types/interfaces/actions.interface";
import { filterProducts } from "../utils/filterProducts";
import { Product } from "../types/interfaces/product.interface";
import { getProductsByCategory } from "../services/market.service";

interface UseFilterProductsProps {
  products: Product[];
  dispatch: (action: AppAction) => void;
}

interface useFilterReturn {
  currentCategory: string;
  currentSearchTerm: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useFilterProducts = ({
  products,
  dispatch,
}: UseFilterProductsProps): useFilterReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState<string>(
    searchParams.get("category") || "all"
  );
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>(
    searchParams.get("search") || ""
  );

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const searchCategory = e.target.value;
    setCurrentCategory(searchCategory);
    setSearchParams({
      category: searchCategory,
      search: currentSearchTerm || "",
      page: "1",
    });
    window.scrollTo(0, 0);
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setCurrentSearchTerm(searchTerm);
    setSearchParams({
      category: currentCategory || "all",
      search: searchTerm,
      page: "1",
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const localResults = filterProducts(
      products,
      currentCategory,
      currentSearchTerm
    );

    if (localResults.length > 0) {
      dispatch({
        type: "SET_FILTER_PRODUCTS",
        payload: localResults,
      });
    } else {
      const fetchProductsByCategory = async () => {
        try {
          const fetchedProducts = await getProductsByCategory(currentCategory);
          if (!fetchedProducts) return;
          dispatch({
            type: "FETCH_PRODUCTS_SUCCESS",
            payload: fetchedProducts,
          });
        } catch (error) {
          console.error(error);
        }
      }

      fetchProductsByCategory();
    }

  }, [currentCategory, currentSearchTerm, dispatch, products]);

  return {
    currentCategory,
    currentSearchTerm,
    handleCategoryChange,
    handleSearchTermChange,
  };
};
