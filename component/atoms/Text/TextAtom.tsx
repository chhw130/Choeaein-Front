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
  textAlign,
  _before,
}: TextProps) => {
  return (
    <Text
      w={w}
      as={as}
      _before={_before}
      textAlign={textAlign}
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
