import { ProjectCard } from "./ui/ProjectCard";
import AviNews from "../public/AviNews.png";
import { AviNewsData, AroundTheUsData, WTWData } from "@/data/data";
import { Button } from "./ui/Button";

export const Projects = () => {
  return (
    <div className="relative flex flex-col gap-10 pb-5 sm:pb-20" id="projects">
      <h1 className="text-center font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl pb-5 sm:pb-10">
        A small slection of <span className="text-purple">projects</span>
      </h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <ProjectCard {...AviNewsData} />
        <ProjectCard {...AroundTheUsData} />
        <ProjectCard {...WTWData} />
      </div>
    </div>
  );
};
