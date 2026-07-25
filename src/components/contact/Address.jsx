import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  const isEmail = item?.title === "Email";
  const isPhone = item?.title === "Phone";
  const href = isEmail
    ? `mailto:${item.description}`
    : isPhone
      ? `tel:${item.description}`
      : undefined;

  const content = (
    <>
      <span className="center aspect-square h-11 flex-none rounded-xl border border-brand-100 bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
        <FontAwesomeIcon icon={item?.icon} className="text-[15px]" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          {item?.title}
        </span>
        <span className="mt-1 block truncate text-[15px] font-semibold text-ink">
          {item?.description}
        </span>
      </span>
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-3.5 transition-[border-color,box-shadow,transform] duration-300 hover:border-brand-200 hover:shadow-[var(--shadow-lift)] sm:p-4";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
};

export default Address;
