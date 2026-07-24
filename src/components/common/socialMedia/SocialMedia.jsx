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
      className="rounded-md p-2 pt-3 text-picto-primary hover:bg-picto-primary hover:text-white xs:p-2.5 xs:pt-3.75 sm:p-3 sm:pt-4 md:p-3.75 md:pt-5"
      key={item.label}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="aspect-square w-4.5 text-xl"
      />
    </a>
  ));
};

export default SocialMedia;
