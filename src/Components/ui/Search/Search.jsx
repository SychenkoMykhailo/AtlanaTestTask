import styles from "./Search.module.scss";
const Search = ({ onSearch, placeholder = "", value }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onSearch}
      value={value}
    />
  );
};
export default Search;
