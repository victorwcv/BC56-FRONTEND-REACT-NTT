import styles from "../css/CartSummary.module.css";
import { useAppState } from "../../../hooks/useAppState";
import { type CartItem } from "../../../types/interfaces/product.interface";
import { Link } from "react-router-dom";

function CartSummary() {
  const { state, dispatch } = useAppState();
  const { cartItems } = state;

  const handleRemoveFromCart = (item: CartItem) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  return (
    <div className={styles.cartSummaryContainer}>
      <table className={styles.cartSummary}>
        <thead className={styles.cartSummary__header}>
          <tr>
            <td>Producto</td>
            <td>Nombre</td>
            <td>Precio Und.</td>
            <td>Cantidad</td>
            <td>Total</td>
            <td>Eliminar</td>
          </tr>
        </thead>
        <tbody className={styles.cartSummary__body}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td data-label="Producto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.product__image}
                    />
                  </td>
                  <td title={item.title} data-label="Nombre">
                    {item.title}
                  </td >
                  <td data-label="Precio und.">$ {item.price}</td>
                  <td data-label="Cantidad">
                    <span className={styles.cartSummary__quantity}>
                      <button
                        type="button"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        +
                      </button>
                    </span>
                  </td>
                  <td data-label="Total">$ {item.total.toFixed(2)}</td>
                  <td >
                    <button
                      type="button"
                      className={styles.cartSummary__deleteButton}
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
              <tr className={styles.cartSummary__grandTotal}>
                <td colSpan={3}>Total a pagar:</td>
                <td colSpan={3}>
                  ${" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.total, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </>
          ) : (
            <tr>
              <td colSpan={6} className={styles.cartSummary__empty}>
                <p>Carrito de compras vacio</p>
                <Link className={styles.cartSummary__link} to="/">
                  Ir a comprar
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartSummary;
