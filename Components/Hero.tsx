import { Button } from "./ui/Button";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { FaLocationArrow } from "react-icons/fa6";
import Portrait from "../public/images/Portrait.jpeg";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-center items-center md:h-screen mt-40 mb-40 lg:mt-0 lg:mb-0">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="max-w-[900px]">
          <p className="text-center relative md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello 👋 Im Dillon, A Full Stack Developer
          </p>
          <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" />
          <p className="uppercase tracking-widest text-xs text-center text-blue-100">
            Created with Next.js & Aceternity UI
          </p>
          <Link to="about" spy={true} smooth={true} duration={500} offset={65}>
            <Button
              otherClasses="backdrop-blur-lg mx-auto"
              title="Explore more"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
      <img
        alt="portrait"
        src={Portrait.src}
        className="h-[350px] md:h-[450px] xl:h-[600px] rounded-xl relative"
      />
    </div>
  );
};
