import { Modal } from "./ui/Modal";
import EmailSent from "../public/images/EmailSent.png";
import { Button } from "./ui/Button";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export const MessageModal = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <Modal>
      <div className="flex flex-col gap-5 p-10">
        <IoIosCloseCircle
          onClick={closeModal}
          className="text-4xl absolute top-[-50px] right-0 sm:top-[-40px] sm:right-[-40px]  sm:text-white hover:scale-125 ease-in-out duration-75 cursor-pointer"
        />
        <img alt="email sent image" src={EmailSent.src} />
        <h1 className="text-center text-purple font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl">
          Horray!
        </h1>
        <span className="uppercase tracking-widest text-sm text-center text-black">
          Your Message has been sent! I Will get back to you soon :)
        </span>
        <Button
          onClick={closeModal}
          title="Okay!"
          icon={<FaRegThumbsUp />}
          position="right"
        />
      </div>
    </Modal>
  );
};
