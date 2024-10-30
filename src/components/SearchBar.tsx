import styles from "../css/searchBar.module.css";
import { Category } from "../types/interfaces/category.interface";

interface Props {
  categories: Category[];
  currentTerm: string;
  currentCategory: string;
  onChangeTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<Props> = ({
  categories,
  currentTerm,
  currentCategory,
  onChangeTerm,
  onChangeCategory,

}) => {
  return (
    <form className={styles.search}>
      <input
        id="search-input"
        type="text"
        value={currentTerm}
        placeholder="Buscar productos..."
        className={styles.search__input}
        aria-label="Buscar productos"
        onChange={(e) => onChangeTerm(e)}
      />
      <select
        id="search-select"
        className={styles.search__select}
        value={currentCategory}
        aria-label="Categorias"
        onChange={(e) => onChangeCategory(e)}
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
};

export default SearchBar;
