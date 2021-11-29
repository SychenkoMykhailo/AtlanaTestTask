import "./App.css";
import Users from "./Components/Users";
import User from "./Components/User";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="main">
      <h1>GitHub Searcher</h1>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:name" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
