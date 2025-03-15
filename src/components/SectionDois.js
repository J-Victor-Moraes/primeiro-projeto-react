import "../styles/sectiondois.css";
import imgUm from "../assets/image 27.png";
import imgDois from "../assets/image 27 (1).png";
import imgTres from "../assets/image 27 (2).png";
import imgQuatro from "../assets/image 27 (3).png";
function SectionDois() {
  return (
    <div className="contMain">
      <div className="contUm">
        <img src={imgUm} />
        <div className="contDois">
          <h1 className="name">air force 1 lv8 3 (Gs)</h1>
          <h2 className="num">R 2,099.00</h2>
        </div>
      </div>
      <div className="contUm">
        <img src={imgDois} />
        <h2 className="name">3 4 5 6</h2>
      </div>
      <div className="contUm">
        <img src={imgTres} />
        <div className="contDois">
          <h1 className="name">air force 1 lv8 3 (Gs)</h1>
          <h2 className="num">R 2,099.00</h2>
        </div>
      </div>
      <div className="contUm">
        <img src={imgQuatro} />
        <div className="contDois">
          <h1 className="name">air force 1 lv8 3 (Gs)</h1>
          <h2 className="num">R 2,099.00</h2>
        </div>
      </div>
    </div>
  );
}
export default SectionDois;
