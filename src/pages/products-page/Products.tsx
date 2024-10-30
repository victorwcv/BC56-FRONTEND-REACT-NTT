// hooks
import { useAppState } from "../../hooks/useAppState";
import { usePagination } from "../../hooks/usePagination";
import { useFilterProducts } from "../../hooks/useFilterProducts";

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
const ITEMS_PER_PAGE = 12;

// Products component

const Products = () => {
  const {
    dispatch,
    state: { products, filteredProducts, categories },
  } = useAppState();

  const errorMesage = CommonMessages.NO_PRODUCTS;

  const {
    currentCategory,
    currentSearchTerm,
    handleCategoryChange,
    handleSearchTermChange,
  } = useFilterProducts({ dispatch, products });

  const { 
    currentPage, 
    productsToDisplay, 
    pageCount, 
    handlePageChange 
  } = usePagination({ itemsPerPage: ITEMS_PER_PAGE, products: filteredProducts });

  const handleAddToCart = (product: Product, quantity: number): void => {
    if (quantity <= 0) return;
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { product, quantity },
    });
  };

  return (
    <>
      <SearchBar
        categories={categories}
        onChangeTerm={handleSearchTermChange}
        onChangeCategory={handleCategoryChange}
        currentTerm={currentSearchTerm}
        currentCategory={currentCategory}
      />

      <ProductList
        products={productsToDisplay}
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
