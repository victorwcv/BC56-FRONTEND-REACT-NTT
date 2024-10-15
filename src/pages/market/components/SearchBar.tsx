import styles from "../css/searchBar.module.css";

import useAppState from "../../../hooks/useAppState";
import { CatSlug } from "../../../types/interfaces/api.interface";

function SearchBar() {
  const { state, dispatch } = useAppState();
  const { categories, selectedCategory } = state;

  return (
    <form className={styles.search}>
      <input
        id="search-input"
        type="text"
        placeholder="Buscar productos..."
        className={styles.search__input}
        aria-label="Buscar productos"
        onChange={(e) =>
          dispatch({
            type: "FILTER_PRODUCTS",
            payload: { category: selectedCategory, searchTerm: e.target.value },
          })
        }
      />
      <select
        id="search-select"
        className={styles.search__select}
        aria-label="Categorias"
        value={selectedCategory}
        onChange={(e) =>
          dispatch({
            type: "FILTER_PRODUCTS",
            payload: { category: e.target.value as CatSlug, searchTerm: "" },
          })
        }
      >
        <option key="all" value="all" className={styles.search__option}>
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
