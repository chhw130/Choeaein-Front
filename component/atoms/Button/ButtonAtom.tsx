"use client";
import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const ButtonAtom = ({
  type,
  w,
  h,
  bg,
  color,
  colorScheme,
  onClick,
  children,
  disabled,
  border,
  borderRadius,
  className,
  fontSize,
  size,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      fontSize={fontSize}
      type={type}
      w={w}
      h={h}
      border={border}
      borderRadius={borderRadius}
      bg={bg}
      size={size}
      color={color}
      colorScheme={colorScheme}
      _hover={{ bg: { bg } }}
      onClick={onClick}
      isDisabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonAtom;
