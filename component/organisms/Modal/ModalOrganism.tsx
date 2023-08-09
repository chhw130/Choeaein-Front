import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";

const ModalOrganism = ({ isOpen, onClose, children, size }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalOrganism;
