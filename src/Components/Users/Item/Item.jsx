import styles from "./Item.module.scss";
import { Link } from "react-router-dom";
const User = ({ avatar_url = "", login = "", repos_url = "" }) => {
  return (
    <Link to={login} className={styles.container}>
      <img src={avatar_url} alt="avatar" className={styles.avatar} />
      <h1>{login}</h1>
    </Link>
  );
};
export default User;
