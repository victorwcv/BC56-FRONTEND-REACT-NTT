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

    {/* before page button */}
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={styles.button}
    >
      Anterior
    </button>
  
    <div className={styles.range}>
       <button
      onClick={() => onPageChange(1)}
      className={`${styles.button} ${currentPage === 1 ? styles.currentPage : ""}`}
    >
      1
    </button>
    <span>...</span>
    {/* range of buttons */}
    {Array.from({ length: pageCount }, (_, index) => index + 1)
      .slice(
        
        Math.max(1, Math.min(currentPage - 2, pageCount - 5)),
        Math.min(pageCount - 1, Math.max(currentPage + 2, 5))
      )
      .map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.button} ${page === currentPage ? styles.currentPage : ""}`}
        >
          {page}
        </button>
      ))}
  
    <span>...</span>
    
    {/* last page button */}
    <button
      onClick={() => onPageChange(pageCount)}
      className={`${styles.button} ${currentPage === pageCount ? styles.currentPage : ""}`}
    >
      {pageCount}
    </button>
    </div>
    {/* first page button */}
   
  
    {/* next page button */}
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
