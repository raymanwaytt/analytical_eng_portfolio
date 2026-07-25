import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";
import Reveal from "../common/reveal/Reveal";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Lagos, Nigeria",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "arunaabdulrahman01@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+2348122249512",
  },
];

const Contact = () => {
  return (
    <section
      className="relative z-10 bg-paper pt-20 md:pt-28"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <Reveal className="panel -mb-24 overflow-hidden p-6 shadow-[var(--shadow-lift-lg)] sm:p-10 md:-mb-32 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="flex flex-col">
              <p className="eyebrow">
                <span className="eyebrow__rule" aria-hidden="true" />
                Contact
              </p>
              <h2 id="contact-title" className="section-title mt-4 text-ink">
                Let&apos;s talk data
              </h2>
              <p className="lede mt-4">
                Open to data engineering and analytics roles, plus freelance
                pipeline and warehouse work. Reach out if you have something
                that fits.
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <a
                  href="mailto:arunaabdulrahman01@gmail.com"
                  className="cta cta--primary"
                >
                  Email me
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="cta__icon text-xs"
                    aria-hidden="true"
                  />
                </a>
                <div className="flex items-center gap-3">
                  <SocialMedia />
                </div>
              </div>
            </div>

            <div className="grid content-start gap-3 lg:content-between">
              {addressData.map((item) => (
                <Address item={item} key={item.title} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
