import { Product } from "../types/interfaces/product.interface";
import ProductCard from "./ProductCard";
import styles from "../css/productList.module.css";

interface Props {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  placeholderIMG: string;
  errorMessage: string;
}

const ProductList: React.FC<Props> = ({
  products,
  onAddToCart,
  placeholderIMG,
  errorMessage,
}) => {
  return (
    <section id="products" className={styles.products}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            placeholderIMG={placeholderIMG}
          />
        ))
      ) : (
        <p>{errorMessage}</p>
      )}
    </section>
  );
};

export default ProductList;
