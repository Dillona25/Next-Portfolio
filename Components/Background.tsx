import { FaPaperPlane } from "react-icons/fa";
import { Button } from "./ui/Button";
import { Reveal } from "./ux/Reveal";
import { Revalia } from "next/font/google";

export const Background = ({
  handleConfirmModal,
}: {
  handleConfirmModal: () => void;
}) => {
  return (
    <section className="relative bg-black-200">
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex gap-4 items-center">
          <h1 className="text-left font-bold lg:text-6xl whitespace-nowrap">
            Experience<span className="text-purple">.</span>
          </h1>
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
        </div>
        <div className="flex flex-col gap-5 bg-black-100 p-5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h1 className="text-lg text-purple font-bold p-0">
                  Software Developer
                </h1>
              </Reveal>
              <h2 className="text-lg hidden sm:block">March 2024 - Current</h2>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h3 className="font-bold text-lg"> ALLO Communications</h3>
              </Reveal>
              <h2 className="text-lg sm:hidden">June 2024 - Current</h2>
              <h3 className="font-normal text-lg"> Lincoln, NE</h3>
            </div>
            <Reveal>
              <p className="mt-3">
                Lead the development and testing of REST API integrations to
                improve data accuracy and streamline workflows across ALLO’s web
                applications. Collaborated with product managers and
                stakeholders to design and implement new features and components
                that aligned with strategic goals and enhanced user engagement.
                Maintained and optimized software systems to improve
                performance, ensure smooth functionality, and deliver a seamless
                user experience, while also creating thorough documentation for
                future development and maintenance.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">JavaScript</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">PHP</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">MySQL</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">REST APIs</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">Postman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10 bg-black-100 p-5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h1 className="text-lg text-purple font-bold p-0">
                  Software Engineering Tutor
                </h1>
              </Reveal>
              <h2 className="text-lg hidden sm:block">
                September 2024 - Current
              </h2>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h3 className="font-bold text-lg">TripleTen</h3>
              </Reveal>
              <h2 className="text-lg sm:hidden">September 2024 - Current</h2>
              <h3 className="font-normal text-lg">Remote</h3>
            </div>
            <Reveal>
              <p className="mt-3">
                Mentor students in debugging complex issues in JavaScript,
                React.js, Node.js, Express.js, and Google Cloud ensuring
                comprehension of the process and underlying concepts. Deliver
                personalized 1:1 guidance, fostering confidence in technical
                skills and problem-solving. Empower students to overcome
                challenges, address imposter syndrome, and celebrate progress.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">JavaScript</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">React.js</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">Node.js</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">Express.js</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">Google Cloud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10 bg-black-100 p-5 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h1 className="text-lg text-purple font-bold p-0">
                  Software Engineer Extern
                </h1>
              </Reveal>
              <h2 className="text-lg hidden sm:block">
                January 2024 - March 2024
              </h2>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <Reveal>
                <h3 className="font-bold text-lg"> Slopopedia, NPO</h3>
              </Reveal>
              <h2 className="text-lg sm:hidden">January 2024 - March 2024</h2>
              <h3 className="font-normal text-lg">Remote</h3>
            </div>
            <Reveal>
              <p className="mt-3">
                Collaborate with a team of six engineers, leveraging Agile
                methodologies and CI/CD pipelines to drive efficient development
                and seamless project delivery. Design and implement dynamic
                front-end components using React, TypeScript, and Tailwind CSS
                to elevate user experiences. Develop optimized GraphQL queries
                and mutations to streamline database interactions, enhancing
                application performance and functionality.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">TypeScript</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">React.js</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">Tailwind CSS</p>
              </div>
              <div className="bg-black-200 rounded-xl p-3">
                <p className="text-sm">GraphQL</p>
              </div>
            </div>
          </div>
        </div>

        {/* <Button
          title="Resume"
          position="right"
          icon={<FaPaperPlane />}
          otherClasses="m-auto"
          onClick={handleConfirmModal}
        /> */}
      </div>
    </section>
  );
};
