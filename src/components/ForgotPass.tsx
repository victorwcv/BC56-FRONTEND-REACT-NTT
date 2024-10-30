import { useState } from "react";
import styles from "../css/forgotPass.module.css";
import { useForm } from "react-hook-form";
import AlertModal from "./AlertModal";
import successIMG from "../assets/success.png";
import { CommonMessages } from "../types/enums/commonMessages.enum";

interface Props {
  onClose: () => void;
}

const ForgotPass: React.FC<Props> = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: unknown) => {
    setShowModal(true);
    console.log(data);
  };

  const handleAlert = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <AlertModal isOpen={showModal} handleAlert={handleAlert} imgSrc={successIMG} msg={CommonMessages.EMAIL_SENT} />
      )}
      <div className={styles.forgotPass}>
        <div className={styles.forgotPass__container}>
          <div>
            <h2 className={styles.forgotPass__title}>Recuperar Contraseña</h2>
            <p className={styles.forgotPass__subtitle}>
              Ingresa tu correo electronico
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field__container}>
              <label htmlFor="email" className={styles.field__label}>
                Correo Electronico
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email es requerido",
                  validate: (value) =>
                    /\S+@\S+\.[a-zA-Z]{3}$/.test(value) || "Email no válido",
                })}
                className={styles.field__input}
              />
              {errors.email && (
                <p className={styles.field__error}>{errors.email.message}</p>
              )}
            </div>
            <div className={styles.forgotPass__btnContainer}>
              <button type="submit" className={styles.forgotPass__btn}>
                Enviar
              </button>
              <button
                type="button"
                className={styles.forgotPass__btnCancel}
                onClick={onClose}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
