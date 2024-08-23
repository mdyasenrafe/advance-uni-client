import React, { useCallback } from "react";
import { Modal as RModal } from "antd";

// Define the props interface for strong typing
interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  closeModal,
  children,
}) => {
  const handleOk = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return (
    <>
      <RModal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={closeModal}
        footer={null}
      >
        {children}
      </RModal>
    </>
  );
};
