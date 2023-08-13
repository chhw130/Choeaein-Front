import { Flex, FlexProps, StackProps, VStack } from "@chakra-ui/react";
import React from "react";

interface FormProps extends StackProps {
  children: React.ReactElement;
}

const Form = ({
  children,
  onSubmit,
  w,
  maxW,
  flexDir,
  justifyContent,
  alignItems,
  margin,
  h,
  fontFamily,
  marginTop,
  spacing,
}: FormProps) => {
  return (
    <VStack
      as={"form"}
      h={h}
      marginTop={marginTop}
      onSubmit={onSubmit}
      w={w}
      maxW={maxW}
      flexDir={flexDir}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      fontFamily={fontFamily}
      spacing={spacing}
    >
      {children}
    </VStack>
  );
};

export default Form;
