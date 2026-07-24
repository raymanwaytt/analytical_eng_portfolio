import Introduction from "../components/introduction/Introduction";
import Featured from "../components/featured/Featured";
import Portfolio from "../components/portfolio/Portfolio";
import Approach from "../components/approach/Approach";
import HappyClients from "../components/happyClients/HappyClients";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <Introduction />
      <Featured />
      <div className="bg-white pt-16 md:pt-24">
        <Portfolio />
      </div>
      <Approach />
      <HappyClients />
      <Contact />
    </div>
  );
};

export default Home;
