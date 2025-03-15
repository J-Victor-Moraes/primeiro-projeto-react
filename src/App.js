import "./index.css";
import Header from "./components/Header";
import SectionUm from "./components/SectionUm.js";
import MainImg from "./assets/image 23.png";
import SectionDois from "./components/SectionDois.js";
import SectionTres from "./components/SectionTres.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <img src={MainImg} className="MainImg" alt="img" />
        <SectionUm />
        <h1 className="just">just dropped</h1>
        <SectionDois />
        <h1 className="just">ceremony</h1>
        <SectionTres />
      </div>
    </div>
  );
}

export default App;
