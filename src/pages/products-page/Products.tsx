// hooks
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppState } from "../../hooks/useAppState";
import usePagination from "../../hooks/usePagination";

// components
import SearchBar from "../../components/SearchBar";
import ProductList from "../../components/ProductList";
import PaginationControls from "../../components/PaginationControls";

// types
import { type Product } from "../../types/interfaces/product.interface";
import { CommonMessages } from "../../types/enums/commonMessages.enum";

// assets
import placeholderIMG from "../../assets/no-image-placeholder.jpg";

// constants
const ITEMS_PER_PAGE = 6;


// Products component

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromParams = searchParams.get("category") || "all";
  const searchTermFromParams = searchParams.get("search") || "";

  const {
    dispatch,
    state: { filteredProducts, categories },
  } = useAppState();

  const errorMesage = CommonMessages.NO_PRODUCTS;

  const { currentPage, displayedProducts, pageCount, handlePageChange } =
    usePagination({ itemsPerPage: ITEMS_PER_PAGE, products: filteredProducts });

  const handleAddToCart = (product: Product, quantity: number): void => {
    if (quantity <= 0) return;
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { product, quantity },
    });
  };

  const handleChangeCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const category = e.target.value;
    setSearchParams({
      page: "1",
      category,
      search: searchParams.get("search") || "",
    });
  };

  const handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setSearchParams({
      page: "1",
      category: searchParams.get("category") || "all",
      search: term,
    });
  };

  useEffect(() => {
    console.log("Searching for products...");

    dispatch({
      type: "FILTER_PRODUCTS",
      payload: {
        category: categoryFromParams,
        searchTerm: searchTermFromParams,
      },
    });
  }, [categoryFromParams, searchTermFromParams, dispatch]);

  return (
    <>
      <SearchBar
        categories={categories}
        onChangeTerm={handleChangeTerm}
        onChangeCategory={handleChangeCategory}
        currentTerm={searchTermFromParams}
        currentCategory={categoryFromParams}
      />

      <ProductList
        products={displayedProducts}
        onAddToCart={handleAddToCart}
        placeholderIMG={placeholderIMG}
        errorMessage={errorMesage}
      />

      <PaginationControls
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Products;
