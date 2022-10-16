import "./styles.css";
import grimoire from "../../assets/grimoire1.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";

export const Content = () => {
  return (
    <div className="contentContainer">
      <div className="bookAndTextContainer">
        <a href="../assets/test1.pdf" download="a_mysterious_and_old_paper.pdf">
          <img className="book" src={grimoire} alt="grimoire"></img>
        </a>
        <a href="../assets/test1.pdf" download="a_mysterious_and_old_paper.pdf">
          <div className="textContent">DOWNLOAD WHITEPAPER</div>
        </a>
      </div>
      <div className="socialNetworks">
        <img className="socialNetworkItem" src={twitter} alt="twitter" />
        <img className="socialNetworkItem" src={discord} alt="discord" />
      </div>
    </div>
  );
};
