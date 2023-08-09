import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface FormProps extends FlexProps {
  children: React.ReactElement;
}

const Form = ({
  children,
  as,
  onSubmit,
  w,
  maxW,
  flexDir,
  justifyContent,
  alignItems,
  margin,
  fontFamily,
}: FormProps) => {
  return (
    <Flex
      as={as}
      onSubmit={onSubmit}
      w={w}
      maxW={maxW}
      flexDir={flexDir}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      fontFamily={fontFamily}
    >
      {children}
    </Flex>
  );
};

export default Form;
