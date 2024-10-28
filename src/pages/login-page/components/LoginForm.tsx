import styles from "../css/loginForm.module.css";
import { useForm } from "react-hook-form";

interface SubmitData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SubmitData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field__container}>
        <label htmlFor="email" className={styles.field__label}>
          Correo electronico
        </label>
        <input
          type="text"
          placeholder="Ej: user@example.com"
          {...register("email", {
            required: "Ingrese un correo",
            validate: {
              email: (value) =>
                /\S+@\S+\.\S+/.test(value) || "Ingrese un correo válido",
            },
          })}
          className={styles.field__input}
        />
        <p className={styles.field__error}>{errors.email?.message}</p>
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
      <button type="button" className={styles.btnLink}>
        Olvidaste tu contraseña?
      </button>
      <button type="submit" className={styles.btnSubmit}>
        Iniciar sesion
      </button>
    </form>
  );
};

export default LoginForm;
