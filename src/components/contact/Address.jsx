import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);
  const isEmail = item?.title === "Email";
  const isPhone = item?.title === "Phone";
  const href = isEmail
    ? `mailto:${item.description}`
    : isPhone
      ? `tel:${item.description}`
      : undefined;

  const content = (
    <>
      <div
        className={`center aspect-square h-10 rounded-[4px] md:h-12 ${
          hover ? "bg-picto-primary" : "bg-teal-100"
        }`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] font-normal text-[#424E60] md:text-[14px]">
          {item?.title}:
        </p>
        <p className="text-[14px] font-medium text-ink md:text-[16px]">
          {item?.description}
        </p>
      </div>
    </>
  );

  const sharedClassName =
    "flex max-w-84 cursor-pointer rounded-[10px] bg-white p-3 shadow-gray-200 duration-450 hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] md:p-3.75 lg:p-6 max-sm:mx-auto";

  if (href) {
    return (
      <a
        href={href}
        className={sharedClassName}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={sharedClassName}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </div>
  );
};

export default Address;
