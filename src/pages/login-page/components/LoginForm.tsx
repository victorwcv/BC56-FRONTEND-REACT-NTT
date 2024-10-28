import { useState } from "react";
import { loginUser } from "../../../services/auth.service";
import { type LoginUser } from "../../../types/interfaces/user.interface";
import styles from "../css/loginForm.module.css";
import { useForm } from "react-hook-form";
import { useAppState } from "../../../hooks/useAppState";
import { useNavigate } from "react-router-dom";
import ForgotPass from "../../../components/ForgotPass";

const LoginForm = () => {
  const { dispatch } = useAppState();
  const [error, setError] = useState<string>("");
  const [showForgotPass, setShowForgotPass] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginUser) => {
    try {
      setError("");
      const res = await loginUser(data);
      dispatch({ type: "SET_USER", payload: res });
      navigate("/market");
    } catch (error) {
      console.error(error);
      setError("Error al iniciar sesión");
    }
  };

  return (
    <>
      {showForgotPass && (
        <ForgotPass onClose={() => setShowForgotPass(false)} />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field__container}>
          <label htmlFor="email" className={styles.field__label}>
            Nombre de usuario
          </label>
          <input
            type="text"
            placeholder="Ej: user@example.com"
            {...register("username", {
              required: "Nombre de usuario requerido",
            })}
            className={styles.field__input}
          />
          <p className={styles.field__error}>{errors.username?.message}</p>
        </div>
        <div className={styles.field__container}>
          <label htmlFor="password" className={styles.field__label}>
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", { required: "Ingrese una contraseña" })}
            className={styles.field__input}
          />
          <p className={styles.field__error}>{errors.password?.message}</p>
        </div>
        <button
          type="button"
          className={styles.btnLink}
          onClick={() => setShowForgotPass(true)}
        >
          Olvidaste tu contraseña?
        </button>
        <button type="submit" className={styles.btnSubmit}>
          Iniciar sesion
        </button>
        {error && <p className={styles.form__error}>{error}</p>}
      </form>
    </>
  );
};

export default LoginForm;
