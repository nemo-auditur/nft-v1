import "./index.css";
import gemme from "../assets/PPtransparent.png";
import title from "../assets/title.png";
import grimoire from "../assets/grimoire1.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";

const LandingPage = () => {
  return (
    <div className="LandingPageContainer">
      <div className="headerContainer">
        <img className="gemmeImg" src={gemme} alt="gemme" />
        <div className="titleContainer">
          <img className="titleImg" src={title} alt="title" />
        </div>
      </div>
      <div className="contentContainer">
        <div className="bookAndTextContainer">
          <a
            href="../assets/test1.pdf"
            download="a_mysterious_and_old_paper.pdf"
          >
            <img className="book" src={grimoire} alt="grimoire"></img>
          </a>
          <a
            href="../assets/test1.pdf"
            download="a_mysterious_and_old_paper.pdf"
          >
            <div className="textContent">DOWNLOAD WHITEPAPER</div>
          </a>
        </div>
        <div className="socialNetworks">
          <img className="socialNetworkItem" src={twitter} alt="twitter" />
          <img className="socialNetworkItem" src={discord} alt="discord" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
