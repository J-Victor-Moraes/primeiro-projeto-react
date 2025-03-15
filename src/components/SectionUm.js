import "../styles/sectionum.css";
import imgUm from "../assets/image 24.png";
import imgDois from "../assets/image 25.png";
import imgTres from "../assets/image 26.png";
function SectionUm() {
  return (
    <div className="contSec">
      <img className="secUmImg" src={imgUm} />
      <img className="secUmImg" src={imgDois} />
      <img className="secUmImg" src={imgTres} />
    </div>
  );
}
export default SectionUm;
