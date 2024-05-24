import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard = ({
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
  src: string;
  alt: string;
  title: string;
  description: string;
  Github?: string;
  site?: string;
  stack1: string;
  stack2: string;
  stack3: string;
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[420px]">
      <div className="flex flex-col gap-4">
        <div className="pt-3 px-3 bg-[#2b2b2b] rounded-t-2xl">
          <img alt={alt} src={src} className="rounded-t-2xl w-full" />
        </div>
        <h1 className="font-semibold flex items-center">
          <span className="whitespace-nowrap text-xl">{title}</span>
          <span className="border-[#797979] mx-4 border-[1px] flex-1"></span>
          <div className="flex gap-2 text-xl">
            <a href={Github} target="_blank">
              <FaGithub className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
            <a href={site} target="_blank">
              <FaExternalLinkAlt className="hover:cursor-pointer hover:scale-110 ease-in-out duration-75" />
            </a>
          </div>
        </h1>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="p-2 bg-[#2b2b2b] rounded-lg">{stack1}</span>
          <span className="p-2 bg-[#2b2b2b] rounded-lg">{stack2}</span>
          <span className="p-2 bg-[#2b2b2b] rounded-lg">{stack3}</span>
        </div>
        <p className="text-[15px] overflow-hidden text-ellipsis line-clamp-5">
          {description}
        </p>
        <button className="text-purple mt-[-10px] w-fit">Learn more..</button>
      </div>
    </div>
  );
};
