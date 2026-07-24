const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="content px-4 py-10 text-neutral-200">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm sm:text-base">
          Abdulrahman Aruna · Data &amp; Analytics Engineer
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/raymanwaytt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahman-aruna-4b564b327/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arunaabdulrahman01@gmail.com"
            className="underline-offset-4 hover:underline"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-neutral-400 sm:text-sm">
          © {copyrightYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
