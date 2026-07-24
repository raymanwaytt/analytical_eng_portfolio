import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import SocialMedia from "../common/socialMedia/SocialMedia";

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
    <div className="relative z-10 -bottom-15 -mt-15 px-2">
      <div
        className="content rounded-2xl bg-white p-4 shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)] md:p-10 lg:p-16"
        id="contact"
      >
        <div className="max-w-2xl">
          <p className="text-[32px] font-semibold text-ink md:text-[38px]">
            Let&apos;s talk data
          </p>
          <p className="pt-4 text-sm font-normal text-soft-dark sm:text-lg">
            Open to data engineering and analytics roles, plus freelance
            pipeline and warehouse work. Reach out if you have something that
            fits.
          </p>
        </div>

        <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {addressData.map((item, index) => (
            <Address item={item} key={index} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:arunaabdulrahman01@gmail.com"
            className="btn btn-primary text-white"
          >
            Email me
          </a>
          <div className="flex items-center">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
