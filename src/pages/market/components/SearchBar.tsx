import styles from "../css/searchBar.module.css";
import { useEffect, useState } from "react";
import { type Category } from "../../../types/interfaces/category.interface";
import { type Product } from "../../../types/interfaces/product.interface";
import { getCategories } from "../../../services/apiCalls";
import { useAppContext } from "../../../context/AppContext";
import { searchProducts } from "../../../utils/searchProduct";
import { CommonMessages } from "../../../types/enums/commonMessages.enum";

interface SearchBarProps {
  products: Product[];
  setmessage: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ products, setmessage }: SearchBarProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchByTerm, setSearchByTerm] = useState<string>("");
  const [searchByCategory, setSearchByCategory] = useState<string>("");
  const { setListedProducts } = useAppContext();

  // fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      if (!categories) return;
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  // filter products by term
  useEffect(() => {
    const filteredProducts = searchProducts(products, searchByTerm, "term");
    setListedProducts(filteredProducts);
    if (filteredProducts.length === 0) {
      setmessage(CommonMessages.NO_RESULTS);
    }
  }, [searchByTerm]);

  // Filter products by category
  useEffect(() => {
    const filteredProducts = searchProducts(
      products,
      searchByCategory,
      "category"
    );
    setListedProducts(filteredProducts);
    if (filteredProducts.length === 0) {
      setmessage(CommonMessages.NO_RESULTS);
    }
  }, [searchByCategory]);

  return (
    <form className={styles.search}>
      <input
        id="search-input"
        type="text"
        placeholder="Buscar productos..."
        className={styles.search__input}
        aria-label="Buscar productos"
        value={searchByTerm}
        onChange={(e) => setSearchByTerm(e.target.value)}
        onFocus={() => setSearchByCategory("")}
      />
      <select
        id="search-select"
        className={styles.search__select}
        aria-label="Categorias"
        value={searchByCategory}
        onChange={(e) => setSearchByCategory(e.target.value)}
        onFocus={() => setSearchByTerm("")}
      >
        <option value="" className={styles.search__option}>
          Todas las categorías
        </option>
        {categories.map((category) => (
          <option
            key={category.slug}
            value={category.slug}
            className={styles.search__option}
          >
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchBar;
