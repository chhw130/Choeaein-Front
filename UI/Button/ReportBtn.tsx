import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ReportModal from "../Modal/ReportModal";
import { ChoeIdolType } from "@/utils/interface/interface";
import { WarningIcon } from "@chakra-ui/icons";

const ReportBtn = ({ idolData }: { idolData: ChoeIdolType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ReportModal isOpen={isOpen} onClose={onClose} idolData={idolData} />
      <ButtonGroup marginTop={4} alignSelf="flex-end">
        <Popover>
          <PopoverTrigger>
            <WarningIcon cursor={"pointer"} margin={"auto 0"} boxSize={"8"} />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>주의사항</PopoverHeader>
            <PopoverBody fontSize={"md"}>
              제보된 아이돌 일정은 관리자의 검토 후에 정상적으로 등록됩니다.
              등록까지 시간이 소요되니 양해부탁드립니다.
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Button padding={5} alignSelf="flex-end" onClick={onOpen}>
          제보하기
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ReportBtn;
