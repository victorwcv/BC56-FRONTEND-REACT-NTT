import styles from "../css/paginationControls.module.css";

interface Props {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<Props> = ({
  currentPage,
  pageCount,
  onPageChange,
}) => {
  return (
    <div className={styles.paginationControls}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        Anterior
      </button>
      <span className={styles.currentPage}>
        {currentPage} de {pageCount}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={styles.button}
      >
        Siguiente
      </button>
    </div>
  );
};

export default PaginationControls;
