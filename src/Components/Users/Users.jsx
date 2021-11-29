import styles from "./Users.module.scss";
import { useEffect, useState } from "react";
import { getUsers } from "../../api";
import Item from "./Item";
import Search from "../ui/Search";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState(localStorage.getItem("keyword"));

  useEffect(() => {
    localStorage.setItem("keyword", "");
    getUsers()
      .catch((error) => <div>ERROR {error.message}</div>)
      .then((users) => setUsers(users));
  }, []);
  const handleSearch = ({ target }) => {
    const { value } = target;
    setKeyword(value);
    localStorage.setItem("keyword", value);
  };
  return (
    <div className={styles.container}>
      <Search
        onSearch={handleSearch}
        placeholder="Search for Users"
        value={keyword}
      />
      <div className={styles.users}>
        {users
          ?.filter(({ login }) =>
            login.toLowerCase().includes(keyword.toLowerCase())
          )
          .map(({ id, ...user }) => (
            <Item {...user} key={id} />
          ))}
      </div>
    </div>
  );
};
export default Users;
