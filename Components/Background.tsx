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
    <section className="relative">
      <div className="max-w-[1350px] m-auto px-7">
        <div className="flex gap-4 items-center">
          <h1 className="text-left font-bold lg:text-6xl whitespace-nowrap">
            Experience<span className="text-purple">.</span>
          </h1>
          <span className="border-[#797979] ml-2 border-[1px] w-full"></span>
        </div>
        <div className="flex flex-col gap-5 bg-black-200 p-5 rounded-md">
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
              <h2 className="text-lg sm:hidden">March 2024 - Current</h2>
              <h3 className="font-normal text-lg"> Lincoln, NE</h3>
            </div>
            <Reveal>
              <p className="mt-3">
                Developed UX/UI components for customer-facing applications
                using HTML, CSS, JavaScript, and PHP, ensuring all code is
                semantic, accessible, and aligned with best practices.
                Collaborated with product managers to define new features and
                capabilities, and conducted regular performance and speed tests
                on ALLO websites and software, implementing necessary updates to
                maintain custom code.
              </p>
            </Reveal>
            <div className="flex gap-2 mt-3">
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">HTML</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">CSS</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">JavaScript</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">PHP</p>
              </div>
            </div>
            <span className="border-[#797979] mt-5 border-[1px] w-full"></span>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10 bg-black-200 p-5 rounded-md">
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
                Collaborated with a team of six engineers using Agile
                methodologies and CI/CD pipeline practices to streamline
                development processes and optimize application performance and
                user experience. Worked with investors and product managers to
                ensure code was meeting strategic and technical goals.
              </p>
            </Reveal>
            <div className="flex gap-2 mt-3">
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">TypeScript</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">React</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">Tailwind</p>
              </div>
              <div className="bg-black-100 rounded-xl p-3">
                <p className="text-sm">GraphQL</p>
              </div>
            </div>
            <span className="border-[#797979] mt-5 border-[1px] w-full"></span>
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
