import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

const InputAtom = ({ placeholder, size, onChange }: InputProps) => {
  return <Input placeholder={placeholder} size={size} onChange={onChange} />;
};

export default InputAtom;
