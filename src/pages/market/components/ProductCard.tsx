import { useAppContext } from "../../../context/AppContext";
import { type Product } from "../../../types/interfaces/product.interface";
import styles from "../css/productCard.module.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { setCartProducts } = useAppContext();

  const handleClick = () => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <figure className={styles.product}>
      <img src={product.image} alt="eggs" className={styles.product__image} />
      <figcaption className={styles.product__description}>
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className={styles.product__description__categories}>
          <h3>Categorias:</h3>
          <p>{product.category}</p>
        </div>

        <h3 className={styles.product__description__price}>
          Precio: <span>S/. {product.price}</span> <span>Kg.</span>
        </h3>

        <button
          className={styles.product__button}
          type="button"
          onClick={handleClick}
        >
          <svg
            fill="currentColor"
            width="80px"
            height="80px"
            viewBox="-3 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z" />
          </svg>
          Agregar al carrito
        </button>
      </figcaption>
    </figure>
  );
}

export default ProductCard;
