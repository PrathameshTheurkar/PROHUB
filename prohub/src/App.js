import "./App.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import { GetUserDetails } from "./appwite_assets/User.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slogan />
    </div>
  );
}

export default App;
