import styles from "../css/CartSummary.module.css";
import useAppState from "../../../hooks/useAppState";
import { type CartItem } from "../../../types/interfaces/product.interface";
import { navigateTo } from "../../../router/navigate";

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
            <td>Precio Un</td>
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
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.product__image}
                    />
                  </td>
                  <td title={item.title}>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>
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
                  <td>$ {item.total.toFixed(2)}</td>
                  <td>
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
                <td colSpan={4}>Total a pagar:</td>
                <td colSpan={2}>
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
                <button type="button" onClick={() => navigateTo("/")}>
                  Ir a comprar
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CartSummary;
