import { createContext, useEffect, useState } from "react";
import "./App.css";
import { GetAccountDetails } from "./appwite_assets/User";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Cards from "./components/cards";
import CreateRepo from "./components/projectForm";

let Session;

function App() {
  const [UserSession, setUserSession] = useState(null);
  Session = createContext(UserSession);

  useEffect(() => {
    GetAccountDetails(setUserSession);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Slogan />
      <CreateRepo />
      <div className="explore-section">
        <span className="explore_start" id="explore">
          EXPLORE PROJECTS
        </span>
        <div className="hr1">
          <hr />
        </div>
        <div className="Cards-section">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
export { Session };
