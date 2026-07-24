import { Outlet } from "react-router-dom";
import Chrome from "../components/nav/Chrome";
import Footer from "../components/layout/Footer";
import Cursor from "../components/fx/Cursor";
import Grain from "../components/fx/Grain";

const Main = () => {
  return (
    <div className="relative min-h-screen bg-void">
      <a
        href="#builds"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-void"
      >
        Skip to work
      </a>
      <Grain />
      <Cursor />
      <Chrome />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
