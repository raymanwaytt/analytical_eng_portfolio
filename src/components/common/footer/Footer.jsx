import { Link } from "react-scroll";
import Monogram from "../brand/Monogram";
import { cvLink } from "../../../data/projects";

const copyrightYear = new Date().getFullYear();

const sections = [
  { name: "Home", url: "introduction" },
  { name: "Featured", url: "featured" },
  { name: "Projects", url: "portfolio" },
  { name: "Approach", url: "approach" },
  { name: "Stack", url: "stack" },
];

const elsewhere = [
  { name: "GitHub", href: "https://github.com/raymanwaytt" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulrahman-aruna-4b564b327/",
  },
  { name: "Email", href: "mailto:arunaabdulrahman01@gmail.com" },
  { name: "Résumé", href: cvLink },
];

const Footer = () => {
  return (
    <footer className="relative z-0 bg-ink-950 pt-40 text-white/70 md:pt-48">
      <div className="shell">
        <div className="flex flex-col gap-12 pb-14 md:flex-row md:items-start md:justify-between md:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Monogram size={40} />
              <span className="text-base font-bold tracking-[-0.015em] text-white">
                Abdulrahman Aruna
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Data &amp; analytics engineer building reliable pipelines and
              analytics-ready warehouses.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-20">
            <nav aria-label="Footer sections">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                Sections
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {sections.map((item) => (
                  <li key={item.url}>
                    <Link
                      to={item.url}
                      smooth={true}
                      duration={800}
                      offset={-96}
                      className="cursor-pointer text-sm text-white/65 transition-colors duration-200 hover:text-brand-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Elsewhere">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                Elsewhere
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {elsewhere.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="text-sm text-white/65 transition-colors duration-200 hover:text-brand-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {copyrightYear} Abdulrahman Aruna. All rights reserved.</p>
          <p className="font-mono tracking-[0.08em]">Lagos, Nigeria · UTC+1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
