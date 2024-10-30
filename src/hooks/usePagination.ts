import { useEffect, useState } from "react";
import { Product } from "../types/interfaces/product.interface";
import { useSearchParams } from "react-router-dom";

interface usePaginationProps {
  itemsPerPage: number;
  products: Product[];
}

interface usePaginationReturn {
  currentPage: number;
  pageCount: number;
  productsToDisplay: Product[];
  handlePageChange: (page: number) => void;
}

export const usePagination = ({
  itemsPerPage,
  products,
}: usePaginationProps): usePaginationReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const productsToDisplay = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: page.toString(),
    });

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const pageFromParams = Number(searchParams.get("page")) || 1;
    setCurrentPage(pageFromParams);
  }, [searchParams]);

  return {
    currentPage,
    pageCount,
    productsToDisplay,
    handlePageChange,
  };
};
