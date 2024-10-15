import styles from "../css/alertModal.module.css";
import { CommonMessages } from "../types/enums/commonMessages.enum";
import useAppState from "../hooks/useAppState";
import { navigateTo } from "../router/navigate";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function AlertModal({ isOpen, onClose }: Props) {
  const { dispatch } = useAppState();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isOpen]);

  const handleClick = () => {
    onClose();
    dispatch({ type: "CLEAR_CART" });
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: { category: "all", searchTerm: "" },
    });
    navigateTo("/");
  };

  return (
    <div className={styles.alertModal}>
      <div className={styles.alertModal__container}>
        <div className={styles.alertModal__imgContainer}>
          <img src="/images/success.png" alt="Registro exitoso" />
        </div>
        <div className={styles.alertModal__msg}>
          {CommonMessages.ORDER_SUCCESS}
        </div>
        <button className={styles.alertModal__btn} onClick={handleClick}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
