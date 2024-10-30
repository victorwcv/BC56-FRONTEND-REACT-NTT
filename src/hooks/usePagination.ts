import { useEffect, useState } from "react";
import { Product } from "../types/interfaces/product.interface";
import { useSearchParams } from "react-router-dom";

interface PaginationOptions {
  itemsPerPage: number;
  products: Product[];
}

interface PaginationReturn {
  currentPage: number;
  pageCount: number;
  displayedProducts: Product[];
  handlePageChange: (page: number) => void;
}

const usePagination = ({
  itemsPerPage,
  products,
}: PaginationOptions): PaginationReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: page.toString(),
    });
  };

  useEffect(() => {
    const pageFromParams = Number(searchParams.get("page")) || 1;
    setCurrentPage(pageFromParams);
  }, [searchParams]);

  return {
    currentPage,
    pageCount,
    displayedProducts,
    handlePageChange,
  }
  
};

export default usePagination;
