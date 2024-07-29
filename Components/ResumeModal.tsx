import { Modal } from "./ui/Modal";

const ResumeConfirmModal = ({
  handleCloseConfirmModal,
}: {
  handleCloseConfirmModal: () => void;
}) => {
  return (
    <Modal>
      <button
        onClick={handleCloseConfirmModal}
        className="text-black text-[20px] font-semibold posiiton: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
      >
        X
      </button>
      <form className="flex flex-col m-auto">
        <h1 className="text-2xl font-bold max-w-[400px] text-center text-black">
          You are about to download my resume as a PDF file, would you like to
          continue?
        </h1>
        <div className="flex flex-col items-center m-auto sm:flex-row gap-5 md:justify-center">
          <a
            onClick={handleCloseConfirmModal}
            download="Resume.pdf"
            href="/images/Resume.pdf"
            className="py-4 px-6 bg-black text-white font-bold rounded-[10px] w-[150px] text-center  hover:scale-105 ease-out duration-75"
          >
            Download
          </a>
          <button
            onClick={handleCloseConfirmModal}
            className="py-4 px-6 bg-[#fb5252] text-white font-bold rounded-[10px] w-[150px]  hover:scale-105 ease-out duration-75"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ResumeConfirmModal;
