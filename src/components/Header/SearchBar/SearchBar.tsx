import styles from "./searchBar.module.css";
import { ReactComponent as IconSearch } from "assets/icons/search.svg";

const SearchBar = () => {
  const placeholder = "Sign Up * Get RM18 Off Voucher!";
  return (
    <div className={styles["search_bar"]}>
      <input
        placeholder={placeholder}
        className={styles["search_bar__input"]}
      />
      <button className={styles["search_bar__button"]}>
        <IconSearch className={styles["search_bar__icon--search"]} />
      </button>
    </div>
  );
};

export default SearchBar;
