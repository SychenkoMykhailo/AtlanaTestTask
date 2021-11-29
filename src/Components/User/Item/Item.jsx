import styles from "./Item.module.scss";
const Item = ({ clone_url = "", forks = "", name = "" }) => {
  return (
    <a href={clone_url} target="_blank" className={styles.container}>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{forks}234</p>
    </a>
  );
};
export default Item;
