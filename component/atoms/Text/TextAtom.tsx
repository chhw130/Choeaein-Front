import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TextAtom = ({
  fontSize,
  color,
  children,
  h,
  lineHeight,
  as,
  w,
  margin,
}: TextProps) => {
  return (
    <Text
      w={w}
      as={as}
      fontSize={fontSize}
      color={color}
      margin={margin}
      h={h}
      lineHeight={lineHeight}
    >
      {children}
    </Text>
  );
};

export default TextAtom;
