import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TextAtom = ({ fontSize, color, children }: TextProps) => {
  return (
    <Text fontSize={fontSize} color={color}>
      {children}
    </Text>
  );
};

export default TextAtom;
