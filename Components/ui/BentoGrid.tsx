import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { Button } from "./Button";
import { FaLocationArrow } from "react-icons/fa6";

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
        "row-span-1 bg-[#2b2b2b] relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col ",
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
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#dadada] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 1 && (
            <ol className="relative border-s border-gray-200 dark:border-black-100">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 dark:bg-black-100"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#dadada]">
                  April 2024 - Current
                </time>
                <h3 className="text-lg font-semibold dark:text-[#dadada]">
                  Web Developer | Premier Cable Services LLC
                </h3>
                <div className="flex flex-col gap-2 mt-2 text-sm font-normal dark:text-[#dadada]">
                  <span>
                    - Collaborated with a team of six engineers, employing Agile
                    methodologies and CI/CD pipeline practices to streamline
                    development processes and ensure efficient project delivery.
                  </span>
                  <span>
                    - Built multiple front-end components using React,
                    TypeScript and Tailwind CSS to enhance the UX.
                  </span>
                  <span>
                    - Wrote search queries and mutations in GraphQL to fetch and
                    create data from a database achieving an average response
                    time and optimizing application performance as well as user
                    experience.
                  </span>
                </div>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border dark:border-gray-900 dark:bg-black-100"></div>
                <time className="mb-1 text-sm font-normal leading-none text-[#dadada]">
                  January 2024 - April 2024
                </time>
                <h3 className="text-lg font-semibold dark:text-[#dadada]">
                  Software Developer (Intern) | Slopopedia, NPO
                </h3>
                <div className="flex flex-col gap-2 mt-2 text-sm font-normal dark:text-[#dadada]">
                  <span>
                    - Collaborated with a team of six engineers, employing Agile
                    methodologies and CI/CD pipeline practices to streamline
                    development processes and ensure efficient project delivery.
                  </span>
                  <span>
                    - Built multiple front-end components using React,
                    TypeScript and Tailwind CSS to enhance the UX.
                  </span>
                  <span>
                    - Wrote search queries and mutations in GraphQL to fetch and
                    create data from a database achieving an average response
                    time and optimizing application performance as well as user
                    experience.
                  </span>
                </div>
              </li>
            </ol>
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
            <Button
              title="Contact"
              otherClasses="w-fit m-auto"
              icon={<FaLocationArrow />}
              position="right"
            />
          )}
        </div>
      </div>
    </div>
  );
};
