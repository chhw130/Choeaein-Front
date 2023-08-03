import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

const TextAtom = ({
  fontSize,
  color,
  children,
  h,
  lineHeight,
  textOverflow,
  whiteSpace,
  as,
}: TextProps) => {
  return (
    <Text
      as={as}
      fontSize={fontSize}
      color={color}
      h={h}
      textOverflow={textOverflow}
      lineHeight={lineHeight}
      whiteSpace={whiteSpace}
    >
      {children}
    </Text>
  );
};

export default TextAtom;
