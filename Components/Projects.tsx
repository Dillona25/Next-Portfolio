import { ProjectCard } from "./ui/ProjectCard";
import AviNews from "../public/AviNews.png";
import { AviNewsData, AroundTheUsData, WTWData } from "@/data/data";
import { Button } from "./ui/Button";

export const Projects = () => {
  return (
    <div className="relative flex flex-col gap-10 pb-5 sm:pb-20" id="projects">
      <h1 className="text-left font-bold text-[40px] md:text-5xl lg:text-6xl border-b-[1px] border-white sm:border-[#2b2b2b] pb-5 sm:pb-10">
        Top projects
      </h1>
      <div className="flex gap-10 flex-wrap ">
        <ProjectCard {...AviNewsData} />
        <ProjectCard {...AroundTheUsData} />
        <ProjectCard {...WTWData} />
      </div>
    </div>
  );
};
