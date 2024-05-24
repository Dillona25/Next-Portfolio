import { ReactNode } from "react";

type ModalType = {
  children?: ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
  className?: ReactNode;
};

export const Modal = (props: ModalType) => {
  return (
    <div className="modal fixed flex flex-col items-center bottom-0 inset-0 z-50 backdrop-blur-md sm:h-[100%] sm:w-[100%] bg-black bg-opacity-50">
      <div
        className={`w-full sm:h-fit absolute bottom-0 bg-white m-auto p-5 sm:p-8 rounded-xl box-border sm:w-[500px] sm:top-0 sm:bottom-0 sm:left-0 sm:right-0 ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
};
