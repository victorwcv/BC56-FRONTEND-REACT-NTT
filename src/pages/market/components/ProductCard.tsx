import { useState } from "react";
import { type Product } from "../../../types/interfaces/product.interface";
import styles from "../css/productCard.module.css";
import useAppState from "../../../hooks/useAppState";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState<string>("1");
  const { dispatch } = useAppState();

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setQuantity(value);
    }
  };

  const handleBlur = (): void => {
    if (quantity === "" || parseInt(quantity, 10) <= 0) {
      setQuantity("1");
    }
  };

  const handleAddToCart = (): void => {
    if (parseInt(quantity, 10) > 0) {
      const quantityNumber = parseInt(quantity, 10);

      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: { product, quantity: quantityNumber },
      });
    }
    setQuantity("1");
  };

  return (
    <figure className={styles.product}>
      <div className={styles.product__imageContainer}>
        <img src={product.image} alt="eggs" className={styles.product__image} />
      </div>
      <figcaption className={styles.product__description}>
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className={styles.product__categories}>
          <h3>Categorias:</h3>
          <p>{product.category}</p>
        </div>

        <h3 className={styles.product__price}>
          Precio: <span>S/. {product.price}</span>
        </h3>

        <div className={styles.product__quantityContainer}>
          <div className={styles.product__quantity}>
            <button
              onClick={() =>
                setQuantity((prevQuantity) =>
                  Math.max(1, parseInt(prevQuantity) - 1).toString()
                )
              }
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              onBlur={handleBlur}
            />
            <button
              onClick={() => {
                setQuantity((prevQuantity) =>
                  (parseInt(prevQuantity, 10) + 1).toString()
                );
              }}
            >
              +
            </button>
          </div>
          <button
            className={styles.addToCart__button}
            type="button"
            onClick={handleAddToCart}
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
        </div>
      </figcaption>
    </figure>
  );
}

export default ProductCard;
