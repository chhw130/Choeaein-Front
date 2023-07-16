import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ReportModal from "../Modal/ReportModal";
import { ChoeIdolType } from "@/utils/interface/interface";

const ReportBtn = ({ idolData }: { idolData: ChoeIdolType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ReportModal isOpen={isOpen} onClose={onClose} idolData={idolData} />
      <Button marginTop={4} padding={5} alignSelf="flex-end" onClick={onOpen}>
        제보하기
      </Button>
    </>
  );
};

export default ReportBtn;
