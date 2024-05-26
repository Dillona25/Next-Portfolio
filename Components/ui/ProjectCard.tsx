import { ReactNode } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MovingDiv } from "./MovingBoder";
import { Reveal } from "../ux/RevealAnimation";

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
  return (
    <div className={`flex flex-col gap-4 max-w-[420px] ${className}`}>
      <MovingDiv className="p-4 pb-5 bg-[#2b2b2b] rounded-2xl flex flex-col gap-4">
        <img alt={alt} src={src} className="rounded-2xl w-full" />
        <h1 className="font-semibold flex items-center">
          <Reveal>
            <span className="whitespace-nowrap text-xl">{title}</span>
          </Reveal>
          <span className="border-[#797979] mx-4 border-[1px] flex-1"></span>
          <div className="flex gap-3 text-xl">
            <a href={Github} target="_blank">
              <FaGithub className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
            <a href={site} target="_blank">
              <FaExternalLinkAlt className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
          </div>
        </h1>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="p-2 bg-[#757575] rounded-lg">{stack1}</span>
          <span className="p-2 bg-[#757575] rounded-lg">{stack2}</span>
          <span className="p-2 bg-[#757575] rounded-lg">{stack3}</span>
        </div>
        <Reveal>
          <p className="text-[15px] text-left overflow-hidden text-ellipsis line-clamp-5">
            {description}
          </p>
        </Reveal>
        <Reveal>
          <a
            href={Github}
            target="_blank"
            className="text-purple mt-[-10px] w-fit"
          >
            Learn more..
          </a>
        </Reveal>
        {/* In the future create a modal extending this component + some more conntent */}
      </MovingDiv>
    </div>
  );
};
