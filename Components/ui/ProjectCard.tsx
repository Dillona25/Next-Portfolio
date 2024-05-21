import { CardBody, CardContainer, CardItem } from "./Project3DCard";

export const ProjectCard = ({
  src,
  alt,
  title,
  description,
  buttonOneText,
  buttonTwoText,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonOneText: string;
  buttonTwoText: string;
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative dark:hover:shadow-lg dark:hover:shadow-purple dark:bg-[#2b2b2b] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={src}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl mt-5 font-bold dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <div className="flex gap-5 items-center mt-5">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {buttonOneText}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttonTwoText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
