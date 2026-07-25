import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Monogram from "../brand/Monogram";
import { cvLink } from "../../../data/projects";
import "./navbar.css";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Featured", url: "featured" },
  { id: 3, name: "Projects", url: "portfolio" },
  { id: 4, name: "Approach", url: "approach" },
  { id: 5, name: "Stack", url: "stack" },
];

const SCROLL_OFFSET = -96;

const NavBar = () => {
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrolled = window.scrollY;
      const track = document.documentElement.scrollHeight - window.innerHeight;
      setStuck(scrolled > 24);
      setProgress(track > 0 ? Math.min(scrolled / track, 1) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${stuck || menuOpen ? "is-stuck" : ""}`}>
      <div className="shell site-header__inner">
        <Link
          to="introduction"
          smooth={true}
          duration={800}
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <Monogram size={40} className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">Abdulrahman Aruna</span>
            <span className="brand__role">Data &amp; Analytics Engineer</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Sections">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={800}
              spy={true}
              offset={SCROLL_OFFSET}
              activeClass="is-active"
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cv"
          >
            CV
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={SCROLL_OFFSET}
            className="cta cta--sm cta--primary header-cta"
          >
            Let&apos;s talk
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div className={`nav-sheet ${menuOpen ? "is-open" : ""}`}>
        <div className="shell nav-sheet__inner">
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={800}
              spy={true}
              offset={SCROLL_OFFSET}
              activeClass="is-active"
              className="nav-sheet__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
              <span className="nav-sheet__index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <div className="nav-sheet__actions">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta--outline"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={SCROLL_OFFSET}
              className="cta cta--primary"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>

      <span
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
};

export default NavBar;
