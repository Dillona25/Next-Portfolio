import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { Button } from "./Button";
import { FaLocationArrow } from "react-icons/fa6";
import { Reveal } from "../ux/RevealAnimation";
import { Link } from "react-scroll";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  const leftLists = ["React.js", "JavaScript", "Typescript"];
  const rightLists = ["Node.js", "Express.js", "MongoDB"];

  return (
    <div
      className={cn(
        "row-span-1 bg-[#2b2b2b] relative overflow-hidden rounded-3xl border border-white/[0.1] lg:group/bento justify-between flex flex-col ",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-[#dadada] font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `${
              id === 1 && `justify-center gap-10`
            } group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-xs  text-[#dadada] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 1 && (
            <>
              <h1 className="flex items-center text-left font-bold leading-[40px] mt-[-50px] text-4xl lg:text-5xl sm:mt-[-75px]">
                Experience<span className="text-purple">.</span>
                <span className="border-[#797979] ml-4 border-[1px] w-full"></span>
              </h1>
              <div className="flex flex-col gap-2 border-b-[1px] border-[#797979] pb-5">
                <div className="flex justify-between text-[15px] sm:text-[18px] font-bold">
                  <Reveal>
                    <h2>Slopopedia, NPO</h2>
                  </Reveal>
                  <Reveal>
                    <p>2024</p>
                  </Reveal>
                </div>
                <div className="flex justify-between text-[15px] sm:text-[18px] font-bold text-purple">
                  <Reveal>
                    <h2>Software Engineer</h2>
                  </Reveal>
                  <Reveal>
                    <p>Remote</p>
                  </Reveal>
                </div>
                <Reveal>
                  <p className="w-full text-[15px] md:text-base">
                    Worked in a team of six engineers to streamline development
                    processes and enhance user experience through Agile
                    methodologies, CI/CD pipeline practices, front-end component
                    building, and efficient data manipulation with GraphQL.
                  </p>
                </Reveal>
                <div className="flex gap-2 mt-2">
                  <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                    TypeScript
                  </span>
                  <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                    React.js
                  </span>
                  <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                    Tailwind
                  </span>
                  <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                    GraphQL
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 pb-5">
                  <div className="flex justify-between text-[15px] sm:text-[18px] font-bold">
                    <Reveal>
                      <h2>TripleTen</h2>
                    </Reveal>
                    <Reveal>
                      <p>2024</p>
                    </Reveal>
                  </div>
                  <div className="flex justify-between text-[15px] sm:text-[18px] font-bold text-purple">
                    <Reveal>
                      <h2>Software Engineering Tutor</h2>
                    </Reveal>
                    <Reveal>
                      <p>Remote</p>
                    </Reveal>
                  </div>
                  <Reveal>
                    <p className="w-full text-[15px] md:text-base">
                      Worked very closely with students of TripleTens Software
                      Engineering bootcamp by providing tailored teaching
                      strategies to help explain and debug complex issues in
                      their code.
                    </p>
                  </Reveal>
                  <div className="flex gap-2 mt-2">
                    <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                      JavaScript
                    </span>
                    <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                      React.js
                    </span>
                    <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                      Node.js
                    </span>
                    <span className="p-2 bg-[#2b2b2b] rounded-md text-xs sm:text-sm">
                      Express.js
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-black-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-black-100"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-black-100"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-black-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <Button
                title="Contact"
                otherClasses="w-fit m-auto"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
