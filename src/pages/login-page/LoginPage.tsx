import styles from "./LoginPage.module.css";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__container}>
        <h2 className={styles.loginPage__title}>Bienvenido</h2>
        <p className={styles.loginPage__subtitle}>Por favor inicia sesion</p>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
