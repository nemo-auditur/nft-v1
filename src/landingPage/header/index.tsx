import "./styles.css";
import gemme from "../../assets/PPtransparent.png";
import title from "../../assets/title.png";

export const Header = () => {
  return (
    <div className="headerContainer">
      <img className="gemmeImg" src={gemme} alt="gemme" />
      <div className="titleContainer">
        <img className="titleImg" src={title} alt="title" />
      </div>
    </div>
  );
};
