import React from "react";
import { Avatar, AvatarProps } from "@chakra-ui/react";
import useUser from "@/utils/hook/useUser";

const AvatarAtoms = ({ size }: AvatarProps) => {
  const { userData } = useUser();
  return <Avatar size={size} src={userData?.profileImg} />;
};

export default AvatarAtoms;
