import Introduction from "../components/introduction/Introduction";
import Featured from "../components/featured/Featured";
import Portfolio from "../components/portfolio/Portfolio";
import Approach from "../components/approach/Approach";
import TechStack from "../components/happyClients/HappyClients";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <Introduction />
      <Featured />
      <Portfolio />
      <Approach />
      <TechStack />
      <Contact />
    </div>
  );
};

export default Home;
