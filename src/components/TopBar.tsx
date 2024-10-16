import styles from "../css/topBar.module.css";
import { useAppContext } from "../context/AppContext";

function TopBar() {
  const { cartProducts } = useAppContext();

  return (
    <header className={styles.topbar}>
      <div className={styles.topbar__container}>
        <div className={styles.topbar__logo}>
          <img src="/images/market.png" alt="Logotipo de My Market" />
          <h1>My Market</h1>
        </div>

        <a href="#" className={styles.topbar__cart}>
          <svg
            fill="currentColor"
            width="800px"
            height="800px"
            viewBox="-1.5 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.252 4.59a.924.924 0 0 1 .921.92v3.602a1.048 1.048 0 0 1-.916 1.017l-8.511.883a.573.573 0 0 1-.145.019.577.577 0 1 0 0 1.154h8.488a.563.563 0 1 1 0 1.126h-.91a1.03 1.03 0 1 1-1.104 0H6.849a1.03 1.03 0 1 1-1.104 0H5.6a1.703 1.703 0 1 1 0-3.406.585.585 0 0 1 .128.014L3.111 3.911H1.39a.563.563 0 1 1 0-1.125h2.09a.562.562 0 0 1 .515.337l.64 1.466h9.617z" />
          </svg>

          <div className={styles.topbar__cart__count}>
            <p id="cart-count">{cartProducts.length}</p>
          </div>
        </a>
      </div>

    </header>
  );
}

export default TopBar;
