import { ReactNode, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Reveal } from "../ux/Reveal";

export const ProjectCard = ({
  className,
  src,
  alt,
  title,
  description,
  Github,
  site,
  stack1,
  stack2,
  stack3,
}: {
  className?: ReactNode;
  src: string;
  alt: string;
  title: string;
  description: string;
  Github?: string;
  site?: string;
  stack1: string;
  stack2: string;
  stack3: string;
  handleModalOne?: () => void;
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(true);
  };

  const handleReadLess = () => {
    setShowMore(false);
  };

  return (
    <div
      id="testimonials"
      className={`flex flex-col gap-4 max-w-[400px] ${className}`}
    >
      <div className="p-4 pb-5 bg-[#2b2b2b] rounded-2xl flex flex-col gap-4 shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <Reveal>
          <img alt={alt} src={src} className="rounded-2xl w-full" />
        </Reveal>
        <div className="font-semibold flex items-center">
          <h2 className="whitespace-nowrap text-xl">{title}</h2>
          <span className="border-[#797979] mx-4 border-[1px] flex-1"></span>
          <div className="flex gap-3 text-xl">
            <a href={Github} target="_blank">
              <FaGithub className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
            <a href={site} target="_blank">
              <FaExternalLinkAlt className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
          </div>
        </div>
        <Reveal>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="p-2 bg-[#757575] rounded-lg">{stack1}</span>
            <span className="p-2 bg-[#757575] rounded-lg">{stack2}</span>
            <span className="p-2 bg-[#757575] rounded-lg">{stack3}</span>
          </div>
        </Reveal>
        <Reveal>
          <p
            className={`text-left overflow-hidden text-ellipsis ${
              showMore === false ? `line-clamp-5` : `line-clamp-none`
            }`}
          >
            {description}
          </p>
        </Reveal>
        <button
          onClick={handleReadMore}
          className={`text-purple w-fit ${
            showMore === true ? `hidden` : `block`
          }`}
        >
          Read more..
        </button>
        <button
          onClick={handleReadLess}
          className={`text-purple w-fit ${
            showMore === true ? `block` : `hidden`
          }`}
        >
          Read less..
        </button>

        {/* In the future create a modal extending this component + some more conntent */}
      </div>
    </div>
  );
};
