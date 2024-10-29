import { useEffect } from "react";
import { AppAction } from "../types/interfaces/actions.interface";

const usePagination = (
  totalItems: number,
  itemsPerPage: number,
  dispatch: React.Dispatch<AppAction>,
  selectedCategory: string,
  searchTerm: string
  
) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  
  useEffect(() => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [selectedCategory, searchTerm]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount) {
      dispatch({ type: "SET_CURRENT_PAGE", payload: newPage });
    }
  };


  return { pageCount, handlePageChange };
};

export default usePagination;
