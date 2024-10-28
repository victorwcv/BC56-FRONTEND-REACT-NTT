import { FC } from "react";
import styles from "../css/topBar.module.css";
import { Link } from "react-router-dom";
import { type User } from "../types/interfaces/user.interface";

interface Props {
  cartItemsLength: number;
  user: User | null;
  handleLogout: () => void;
}

const TopBar: FC<Props> = ({ cartItemsLength, user, handleLogout }) => {
  return (
    <header className={styles.topbar} data-testid="topbar">
      <div className={styles.topbar__container}>
        <Link to="/market" className={styles.topbar__logo} title="Ir a inicio">
          <img src="/images/market.png" alt="Logotipo de My Market" />
          <h1>My Market</h1>
        </Link>

        <div className={styles.topbar__right}>
          <Link
            to="/market/order-summary"
            className={styles.topbar__cart}
            title={`Productos en el carrito (${cartItemsLength})`}
          >
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
              <p id="cart-count">{cartItemsLength}</p>
            </div>
          </Link>
          <div className={styles.topbar__user}>
            {user && (
              <p className={styles.topbar__greeting}>
                Bienvenido, {user.username}
              </p>
            )}
            <button className={styles.topbar__logout} onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
