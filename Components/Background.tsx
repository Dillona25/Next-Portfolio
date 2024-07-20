import Html from "../assets/Html.svg";
import Css from "../assets/Css.svg";
import Tailwind from "../assets/Tailwind.svg";
import JavaScript from "../assets/JavaScript.svg";
import TypeScript from "../assets/typescript.svg";
import ReactImg from "../assets/React.svg";
import NodeJS from "../assets/Node.svg";
import Mongo from "../assets/Mongo.svg";
import Cloud from "../assets/Cloud.svg";
import PHP from "../assets/php.svg";

export const Background = () => {
  return (
    <div className="relative">
      {/* <div className="flex gap-4 items-center">
        <h1 className="text-left font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl whitespace-nowrap">
          About Me<span className="text-purple">.</span>
        </h1>
        <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
      </div> */}
      <div className="flex justify-between items-center py-10">
        <div className="flex flex-col justify-center gap-10">
          <h1 className="hidden md:block max-w-[700px] text-left font-bold text-[40px] leading-[45px] md:text-5xl lg:text-6xl">
            My Professional <span className="text-purple">Experience</span>
          </h1>
          <div className="flex gap-2 items-center md:hidden pb-5"></div>
          <p className="uppercase tracking-widest text-sm md:mt-[-20px] text-blue-100">
            Check out my tech stacks below as well :)
          </p>
          <div className="flex gap-3">
            <img
              alt="Html logo"
              src={Html.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Css logo"
              src={Css.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Tailwind logo"
              src={Tailwind.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Php logo"
              src={PHP.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="JavaScript logo"
              src={JavaScript.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="TypeScript logo"
              src={TypeScript.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="React logo"
              src={ReactImg.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Node logo"
              src={NodeJS.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Mongo logo"
              src={Mongo.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Cloud logo"
              src={Cloud.src}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
          </div>
        </div>
        <ol className="relative border-s border-purple max-w-[600px]">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-purple rounded-full mt-1.5 -start-1.5"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white">
              May 2024 - Current
            </time>
            <h3 className="text-lg font-semibold text-white">
              Software Developer | ALLO Communications
            </h3>
            <div className="flex flex-col gap-1 mb-4 text-base font-normal text-white">
              <p>
                ● Develop UX/UI components for customer-facing applications
                using HTML, CSS, JavaScript, React and PHP ensuring all code is
                semantic, accessible, responsive and aligned with best
                practices. This effort has resulted in trafficking an average of
                125 visits a day and 500+ new customers a month.
              </p>
              <p>
                ● Work closely with product managers and customers to define new
                features and capabilities, taking charge of daily, weekly, and
                monthly updates to ensure new code meets ALLO's strategic
                marketing goals.
              </p>
              <p>
                ● Conduct regular performance and speed tests on ALLO websites
                to identify areas for improvement. Implement necessary updates
                achieving an average page load time improvement of 0.42 seconds.
              </p>
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-purple rounded-full mt-1.5 -start-1.5"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white">
              January 2024 - May 2024
            </time>
            <h3 className="text-lg font-semibold text-white">
              Full Stack Enginner Intern | Slopopedia
            </h3>
            <div className="flex flex-col gap-1 mb-4 text-base font-normal text-white">
              <p>
                ● Collaborated with a team of six engineers, employing Agile
                methodologies and CI/CD pipeline practices to streamline
                development processes and ensure efficient project delivery.
              </p>
              <p>
                ● Built multiple front-end components using React, TypeScript
                and Tailwind CSS to enhance the UX.
              </p>
              <p>
                ● Wrote search queries and mutations in GraphQL to fetch and
                create data from a database optimizing application performance
                as well as user experience.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};
