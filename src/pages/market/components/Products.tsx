import styles from "../market.module.css";
import ProductCard from "../../../components/ProductCard";
import { useAppState } from "../../../hooks/useAppState";
import { CommonMessages } from "../../../types/enums/commonMessages.enum";
import { type Product } from "../../../types/interfaces/product.interface";
import SearchBar from "./SearchBar";
import PaginationControls from "../../../components/PaginationControls";
import usePagination from "../../../hooks/usePagination";
import { getDisplayedProducts } from "../../../helpers/pagination.helper";
import placeholderIMG from "../../../assets/no-image-placeholder.jpg";

const itemsPerPage = 6;

const Products = () => {
  const {
    dispatch,
    state: { filteredProducts, currentPage, selectedCategory, searchTerm },
  } = useAppState();
  const errorMesage = CommonMessages.NO_PRODUCTS;

  const totalItems = filteredProducts.length;

  const { pageCount, handlePageChange } = usePagination(
    totalItems,
    itemsPerPage,
    dispatch,
    selectedCategory,
    searchTerm  
  )

  const displayedProducts = getDisplayedProducts(
    filteredProducts,
    currentPage,
    itemsPerPage
  );

  const handleAddToCart = (product: Product, quantity: number): void => {
    if (quantity <= 0) return;
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { product, quantity },
    });
  };

  return (
    <div className={styles.products__container}>
      <SearchBar />
      <section id="products" className={styles.products}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              placeholderIMG={placeholderIMG}
            />
          ))
        ) : (
          <p>{errorMesage}</p>
        )}
      </section>
      <PaginationControls currentPage={currentPage} pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default Products;
