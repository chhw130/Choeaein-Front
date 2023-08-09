import { Input, InputProps } from "@chakra-ui/react";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputAtomProps extends InputProps {
  register?: UseFormRegisterReturn;
}

const InputAtom = ({
  placeholder,
  size,
  onChange,
  fontFamily,
  w,
  h,
  fontSize,
  margin,
  register,
  type,
}: InputAtomProps) => {
  return (
    <Input
      placeholder={placeholder}
      size={size}
      type={type}
      onChange={onChange}
      fontFamily={fontFamily}
      w={w}
      h={h}
      fontSize={fontSize}
      margin={margin}
      {...register}
    />
  );
};

export default InputAtom;
