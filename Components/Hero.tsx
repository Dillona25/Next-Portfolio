import { Button } from "./ui/Button";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { FaLocationArrow } from "react-icons/fa6";
import Portrait from "../public/95C533F6-6153-4D43-ACF5-850A5ED80326_1_102_a.jpeg";

export const Hero = () => {
  return (
    <div className="flex m-auto justify-center items-center h-screen">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Created using Next.js & Aceternity UI
            </p>
            <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi 👋 Im Dillon, a full stack Web Developer
            </p>
            <Button
              otherClasses="backdrop-blur-lg"
              title="Explore more"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
          <div>
            <img
              alt="portrait"
              src={Portrait.src}
              className="h-[600px] w-fit rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
