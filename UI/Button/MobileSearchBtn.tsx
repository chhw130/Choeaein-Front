import { Button } from "@chakra-ui/react";
import React from "react";
import { GoSearch } from "react-icons/go";

const MobileSearchBtn = () => {
  const searchHandler = () => {};
  return (
    <Button
      onClick={() => searchHandler()}
      display={["block", "block", "none"]}
    >
      <GoSearch />
    </Button>
  );
};

export default MobileSearchBtn;
