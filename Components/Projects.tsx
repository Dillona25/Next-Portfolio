import { ProjectCard } from "./ui/ProjectCard";
import AviNews from "../public/AviNews.png";
import { AviNewsData } from "@/data/data";

export const Projects = () => {
  return (
    <div className="relative flex flex-col pb-20">
      <div className="flex flex-col">
        <ProjectCard {...AviNewsData} />
      </div>
    </div>
  );
};
