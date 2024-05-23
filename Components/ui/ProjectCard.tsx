import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const ProjectCard = ({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
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
            <FaGithub />
            <FaExternalLinkAlt />
          </div>
        </h1>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="p-2 bg-[#2b2b2b] rounded-lg">TypeScript</span>
          <span className="p-2 bg-[#2b2b2b] rounded-lg">TypeScript</span>
          <span className="p-2 bg-[#2b2b2b] rounded-lg">TypeScript</span>
        </div>
        <p className="text-[15px] overflow-hidden text-ellipsis line-clamp-5">
          {description}
        </p>
        <button className="text-purple mt-[-10px] w-fit">Learn more..</button>
      </div>
    </div>
  );
};
