import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/abdulrahman-aruna-4b564b327/",
    label: "LinkedIn",
  },
  {
    icon: faGithub,
    link: "https://github.com/raymanwaytt",
    label: "GitHub",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item) => (
    <a
      href={item.link}
      aria-label={item.label}
      target="_blank"
      rel="noopener noreferrer"
      key={item.label}
      className="center aspect-square h-[3.125rem] rounded-xl border border-slate-200/80 bg-white text-slate-soft transition-[color,border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
    >
      <FontAwesomeIcon icon={item.icon} className="text-lg" aria-hidden="true" />
    </a>
  ));
};

export default SocialMedia;
