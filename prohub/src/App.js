import "./App.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Cards from "./components/cards";
import CreateRepo from "./components/CreateRepo";
import { createContext, useEffect, useState } from "react";
import { GetAccountDetails } from "./appwite_assets/User";
import Footer from "./components/Footer";

let Session;

function App() {
  const [UserSession, setUserSession] = useState(null);
  Session = createContext(UserSession);

  useEffect(() => {
    GetAccountDetails(setUserSession);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <CreateRepo show={isModalVisible} handleClose={handleCloseModal} />
      <Navbar />
      <Slogan handleOpenModal={handleOpenModal} />
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
      <Footer />
    </div>
  );
}

export default App;
export { Session };
