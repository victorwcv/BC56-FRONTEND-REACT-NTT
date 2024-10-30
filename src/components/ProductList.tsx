import { Product } from "../types/interfaces/product.interface";
import ProductCard from "./ProductCard";
import styles from "../css/productList.module.css";

interface Props {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  errorMessage: string;
}

const ProductList: React.FC<Props> = ({
  products,
  onAddToCart,
  errorMessage,
}) => {
  return (
    <section id="products" className={styles.products} >
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      ) : (
        <p>{errorMessage}</p>
      )}
    </section>
  );
};

export default ProductList;
