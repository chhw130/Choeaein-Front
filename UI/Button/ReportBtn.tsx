import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ReportModal from "../Modal/ReportModal";

const ReportBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ReportModal isOpen={isOpen} onClose={onClose} />
      <Button marginTop={10} alignSelf="flex-end" onClick={onOpen}>
        제보하기
      </Button>
    </>
  );
};

export default ReportBtn;
