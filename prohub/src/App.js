import "./App.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Cards from "./components/cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slogan />
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
