import styles from "./LoginPage.module.css";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.loginPage} data-testid="login-page">
      <picture className={styles.loginPage__picture}>
        <img
        src="/images/shopping-app.svg"
        alt="ilustration"
      />
      </picture>
      <picture>
        <img
          src="/images/market.png"
          alt="ilustration"
          className={styles.loginPage__logo}
        />
      </picture>

      <div className={styles.loginPage__container}>
        <h2 className={styles.loginPage__title}>Bienvenido</h2>
        <p className={styles.loginPage__subtitle}>Por favor inicia sesion</p>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
