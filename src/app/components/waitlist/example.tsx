import React from "react";
import { useModal } from "@/app/context/ModalContext";
import Modal from "@/app/components/ui/modal";
import WaitlistModal from "../../../../public/images/home/waitlist-modal";

const ExampleComponent = () => {
  const { openModal, isOpen, closeModal } = useModal();

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal>
        <WaitlistModal isOpen={isOpen} onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default ExampleComponent;
