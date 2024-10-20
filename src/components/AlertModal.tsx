import styles from "../css/alertModal.module.css";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  handleAlert: () => void;
  imgSrc?: string;
  msg: string;
}

function AlertModal({ isOpen, handleAlert, imgSrc, msg, }: Props) {

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

 

  return (
    <div className={styles.alertModal}>
      <div className={styles.alertModal__container}>
        <div className={styles.alertModal__imgContainer}>
          <img src={imgSrc} alt="alert" />
        </div>
        <div className={styles.alertModal__msg}>
          {msg}
        </div>
        <button className={styles.alertModal__btn} onClick={handleAlert}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
