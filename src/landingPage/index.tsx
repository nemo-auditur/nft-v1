import "./index.css";
import { Header } from "./header/index";
import { Content } from "./content/index";

const LandingPage = () => {
  return (
    <div className="LandingPageContainer">
      <Header />
      <Content />
    </div>
  );
};

export default LandingPage;
