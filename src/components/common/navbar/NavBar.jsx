import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import { cvLink } from "../../../data/projects";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Projects", url: "featured" },
  { id: 3, name: "Approach", url: "approach" },
  { id: 4, name: "Stack", url: "stack" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#0f766e",
        color: "white",
      }}
      className="mx-1 px-5 py-3 hover:text-picto-primary"
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-1000 ${
        position > 50
          ? "border-b border-gray-300 bg-soft-white"
          : "border-white bg-white"
      }`}
    >
      <div className="navbar content mx-auto flex justify-between">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content z-1 mt-3 w-lvw flex-nowrap rounded-box bg-white p-2 font-semibold text-black shadow"
            >
              {menu}
              <li>
                <a href={cvLink} target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </li>
            </ul>
          </div>

          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-8 rounded-2xl sm:h-14" alt="logo" />
            <p className="my-auto ms-[12px] text-xl font-semibold sm:text-[28px]">
              Abdulrahman Aruna
            </p>
          </Link>
        </div>

        <div className="items-center lg:flex">
          <ul className="menu menu-horizontal hidden text-[16px] font-medium md:shrink-0 lg:flex">
            {menu}
          </ul>
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm xs:btn-md"
            >
              CV
            </a>
            <Link
              className="btn btn-sm btn-primary xs:btn-md sm:btn-lg text-white"
              to="contact"
              smooth={true}
              duration={900}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
