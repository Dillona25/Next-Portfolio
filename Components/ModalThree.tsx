import { TrackerData as Data } from "@/data/data";
import { Modal } from "./ui/Modal";
import Tracker from "../public/Flight.png";
import { Button } from "./ui/Button";

export const ModalThree = ({ closeModal }: { closeModal?: () => void }) => {
  return (
    <Modal className="p-0">
      <div className="flex flex-col gap-4 max-w-[420px] bg-[#2b2b2b] p-5 z-10">
        <div className="flex flex-col gap-4">
          <div className="pt-3 bg-[#2b2b2b] flex flex-col gap-2">
            <img
              alt={Data.alt}
              src={Tracker.src}
              className="rounded-2xl w-full"
            />
          </div>
          <p className="text-[15px] text-center">{Data.description}</p>
          <Button title="Close" onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
};
