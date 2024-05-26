import { Button } from "./ui/Button";
import { ProjectCard } from "./ui/ProjectCard";
import { AviNewsData, AroundTheUsData, TrackerData } from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";

export const Projects = ({
  handleModalOne,
}: {
  handleModalOne?: () => void;
}) => {
  return (
    <div
      className="relative flex flex-col gap-10 pt-14 md:pt-0 md:pb-36"
      id="projects"
    >
      <div className="flex gap-4 items-center sm:pb-10">
        <h1 className="text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl whitespace-nowrap">
          Top projects<span className="text-purple">.</span>
        </h1>
        <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
      </div>
      <div className="flex gap-5 md:gap-10 flex-wrap justify-center">
        <ProjectCard handleModalOne={handleModalOne} {...AviNewsData} />
        <ProjectCard {...AroundTheUsData} />
        <ProjectCard {...TrackerData} />
      </div>
      <a
        href="https://github.com/Dillona25"
        target="_blank"
        className="w-fit mx-auto"
      >
        <Button
          otherClasses="backdrop-blur-lg"
          title="Explore more"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};
