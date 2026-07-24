import Hero from "../components/hero/Hero";
import Signal from "../components/sections/Signal";
import Pipeline from "../components/sections/Pipeline";
import Builds from "../components/sections/Builds";
import Trace from "../components/sections/Trace";
import Stack from "../components/sections/Stack";
import Deliver from "../components/sections/Deliver";

const Home = () => {
  return (
    <main>
      <Hero />
      <Signal />
      <Pipeline />
      <Builds />
      <Trace />
      <Stack />
      <Deliver />
    </main>
  );
};

export default Home;
