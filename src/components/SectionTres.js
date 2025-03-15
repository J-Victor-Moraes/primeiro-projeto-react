import "../styles/sectiondois.css";
import imgUm from "../assets/image 27 (4).png";
import imgDois from "../assets/image 27 (5).png";
import imgTres from "../assets/image 27 (6).png";
import imgQuatro from "../assets/image 27 (7).png";
function SectionTres() {
  return (
    <div className="contMain">
      <div className="contUm">
        <img src={imgUm} className="img" />
        <div className="contDois">
          <h1 className="name">got matcha? crewneck </h1>
          <h2 className="num">R 799.00</h2>
        </div>
      </div>
      <div className="contUm">
        <img src={imgDois} className="img" />
        <h2 className="name">l XL</h2>
      </div>
      <div className="contUm">
        <img src={imgTres} className="img" />
        <div className="contDois">
          <h1 className="name">tokyo athlete club</h1>
          <h2 className="num">R 1,200.00</h2>
        </div>
      </div>
      <div className="contUm">
        <img src={imgQuatro} className="img" />
        <div className="contDois">
          <h1 className="name">tokyo athlete club </h1>
          <h2 className="num">R 2,099.00</h2>
        </div>
      </div>
    </div>
  );
}
export default SectionTres;
