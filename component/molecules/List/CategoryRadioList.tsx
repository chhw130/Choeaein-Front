import { Box, RadioProps, useRadio } from "@chakra-ui/react";
import React from "react";

interface RadioListProps extends RadioProps {
  categoryBg: string;
}

const CategoryRadioList = (props: RadioListProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="li" listStyleType={"none"} marginBottom={3}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: props.categoryBg,
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={1}
        fontSize={"0.8rem"}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default CategoryRadioList;
