import { Button } from "./ui/Button";
import { ProjectCard } from "./ui/ProjectCard";
import { AviNewsData, AroundTheUsData, TrackerData } from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section className="relative flex flex-col gap-10" id="projects">
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex items-center">
          <span className="border-[#797979] mr-2 border-[1px] w-full"></span>
          <h1 className="text-left font-bold md:text-5xl lg:text-6xl whitespace-nowrap">
            Projects<span className="text-purple">.</span>
          </h1>
        </div>
        <div className="flex gap-8 md:gap-10 flex-wrap justify-center">
          <ProjectCard {...AviNewsData} />
          <ProjectCard {...AroundTheUsData} />
          <ProjectCard {...TrackerData} />
        </div>
        <a
          href="https://github.com/Dillona25"
          target="_blank"
          className="w-fit mx-auto"
        >
          <Button
            otherClasses="backdrop-blur-lg m-auto"
            title="Explore more"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};
