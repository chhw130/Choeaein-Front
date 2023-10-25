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
  letterSpacing,
  cursor,
  padding,
}: TextProps) => {
  return (
    <Text
      w={w}
      as={as}
      cursor={cursor}
      letterSpacing={letterSpacing}
      _before={_before}
      textAlign={textAlign}
      fontSize={fontSize}
      color={color}
      margin={margin}
      h={h}
      lineHeight={lineHeight}
      padding={padding}
    >
      {children}
    </Text>
  );
};

export default TextAtom;
