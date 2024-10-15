import styles from "./market.module.css";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import useAppState from "../../hooks/useAppState";
import { CommonMessages } from "../../types/enums/commonMessages.enum";

export default function Market() {
  const { state } = useAppState();
  const { filteredProducts } = state;

  const errorMesage = CommonMessages.NO_PRODUCTS;

  return (
    <div className={styles.market}>
      <SearchBar />
      <section id="products" className={styles.products}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{errorMesage}</p>
        )}
      </section>
    </div>
  );
}
