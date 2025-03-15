import "../styles/header.css";
import imgLogo from "../assets/image 22.png";
import imgLupa from "../assets/ri_search-line.png";
import imgAvatar from "../assets/carbon_user-avatar.png";
import imgHeart from "../assets/mdi_cards-heart-outline.png";
import imgShop from "../assets/material-symbols_shopping-bag-outline.png";
function Header() {
  return (
    <div>
      <div className="contHeader">
        <img src={imgLogo} className="imgLogo" />
        <div className="contHeaderText">
          <h3 className="headerText">launches</h3>
          <h3 className="headerText">sneakers</h3>
          <h3 className="headerText">apparel</h3>
          <h3 className="headerText">kids</h3>
          <h3 className="headerText">acessories</h3>
          <h3 className="headerText">culture</h3>
          <h3 className="headerText">brands</h3>
        </div>
        <div className="contHeaderImg">
          <img src={imgLupa} className="imgHeader" />
          <img src={imgAvatar} className="imgHeader" />
          <img src={imgHeart} className="imgHeader" />
          <img src={imgShop} className="imgHeader" />
        </div>
      </div>
      <div className="headerBorder"></div>
    </div>
  );
}
export default Header;
