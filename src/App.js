// import Button from "./components/Button";
// import imagem from "./assets/semantica-HTML-artigo.png";
import "./index.css";
import Header from "./components/Header";
import SectionUm from "./components/SectionUm.js";
import MainImg from "./assets/image 23.png";
import SectionDois from "./components/SectionDois.js";
import SectionTres from "./components/SectionTres.js";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={MainImg} className="MainImg" />
      <SectionUm></SectionUm>
      <h1 className="just">just dropped</h1>
      <SectionDois></SectionDois>
      <h1 className="just">ceremony</h1>
      <SectionTres></SectionTres>
    </div>
  );
}

export default App;
