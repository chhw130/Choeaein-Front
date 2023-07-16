import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" marginBottom={3}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "orange.500",
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

export default RadioCard;
