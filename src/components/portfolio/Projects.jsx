import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolStack from "./ToolStack";

const Projects = ({ data }) => {
  return (
    <article className="max-w-106 overflow-hidden rounded-lg border border-gray-200 outline-[#FFFFFF] shadow-gray-300 transition-all duration-300 hover:shadow-2xl">
      <img
        src={data?.image}
        alt={`${data?.title} image`}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 xs:p-8">
        <p className="text-xs font-medium text-gray-400">{data?.category}</p>
        <h3 className="mb-3 pt-1 text-md font-semibold text-gray-900 xxs:text-lg">
          {data?.title}
        </h3>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-wrap text-xs text-gray-600 xxs:text-[14px]"
        >
          {data?.description}
        </p>

        {data.tools && <ToolStack tools={data.tools} />}

        <a
          href={data?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-5 bg-white px-6 text-sm font-semibold transition-all duration-300 hover:border-picto-primary hover:text-picto-primary xs:py-5.75 xs:text-[16px] max-sm:w-full"
        >
          View project
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" />
          </span>
        </a>
      </div>
    </article>
  );
};

export default Projects;
