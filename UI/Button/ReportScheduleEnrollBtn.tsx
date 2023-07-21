import { Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { FiUserCheck } from "react-icons/fi";

const ReportScheduleEnrollBtn = ({ value }: any) => {
  const enrollHandler = () => {};

  return (
    <Button onClick={() => enrollHandler()}>
      <FiUserCheck />
    </Button>
  );
};

export default ReportScheduleEnrollBtn;
