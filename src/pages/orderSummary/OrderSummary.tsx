import CartSummary from "./components/CartSummary";
import ShippingInfoForm from "./components/ShippingInfoForm";
import styles from "./orderSummary.module.css";

function OrderSummary() {
  return (
    <div className={styles.orderSummary}>
      <h2 className={styles.orderSummary__title}>Resumen de orden de compra</h2>
      <div className={styles.orderSummary__container}>
        <CartSummary />
        <ShippingInfoForm />
      </div>
    </div>
  );
}

export default OrderSummary;
