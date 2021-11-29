import styles from "./User.module.scss";
import { getUserByName, getUserRepos } from "../../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";
import Search from "../ui/Search";
const Popup = () => {
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleSearch = ({ target }) => setKeyword(target.value);

  useEffect(() => {
    getUserByName(pathname.slice(1))
      .catch((error) => {
        console.log(error.message);
      })
      .then((user) => {
        if (user.message) {
          navigate("/");
        }
        setUser(user);
      });
    getUserRepos(pathname.slice(1))
      .catch((error) => {
        console.log(error.message);
      })
      .then((repos) => {
        setRepos(repos);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={user?.avatar_url} alt="avatar" className={styles.avatar} />
        <div className={styles.info}>
          <p>{user?.login}</p>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.location}</p>
          <p>{user?.created_at}</p>
          <p>Followers: {user?.followers}</p>
          <p>Following: {user?.following}</p>
        </div>
      </div>
      <div className={styles.container}>
        <Search onSearch={handleSearch} placeholder="Search for Repos" />
      </div>
      <div className={styles.repos}>
        {repos
          ?.filter(({ name }) =>
            name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map(({ id, ...repo }) => (
            <Item {...repo} key={id} />
          ))}
      </div>
    </div>
  );
};
export default Popup;
