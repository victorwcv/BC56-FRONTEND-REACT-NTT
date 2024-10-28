import styles from "../market.module.css";
import ProductCard from "../../../components/ProductCard";
import { useAppState } from "../../../hooks/useAppState";
import { CommonMessages } from "../../../types/enums/commonMessages.enum";
import { type Product } from "../../../types/interfaces/product.interface";
import SearchBar from "./SearchBar";

const Products = () => {
  const {
    dispatch,
    state: { filteredProducts },
  } = useAppState();
  const errorMesage = CommonMessages.NO_PRODUCTS;

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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>{errorMesage}</p>
        )}
      </section>
    </div>
  );
};

export default Products;
