import { profile } from "../../data/portfolio";

const year = new Date().getFullYear();

const Footer = () => {
  const toTop = () =>
    document.getElementById("source")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-signal" />
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
            {profile.name} — {profile.role}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-haze hover:text-chalk"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-haze hover:text-chalk"
          >
            LinkedIn
          </a>
          <button
            type="button"
            onClick={toTop}
            className="font-mono text-xs uppercase tracking-[0.16em] text-haze hover:text-signal"
          >
            Top ↑
          </button>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
          © {year} · Built from scratch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
