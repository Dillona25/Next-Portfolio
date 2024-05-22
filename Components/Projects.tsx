import { Button } from "./ui/Button";
import { ProjectCard } from "./ui/ProjectCard";
import { AviNewsData, AroundTheUsData, WTWData } from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";

export const Projects = () => {
  return (
    <div className="relative flex flex-col gap-10 pb-5 sm:pb-20" id="projects">
      <h1 className="flex items-center text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl pb-5 sm:pb-10">
        Projects<span className="text-purple">.</span>
        <span className="border-[#797979] ml-4 border-[1px] w-full"></span>
      </h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <ProjectCard {...AviNewsData} />
        <ProjectCard {...AroundTheUsData} />
        <ProjectCard {...WTWData} />
      </div>
      <Button
        otherClasses="backdrop-blur-lg mx-auto"
        title="Explore more"
        icon={<FaLocationArrow />}
        position="right"
      />
    </div>
  );
};
