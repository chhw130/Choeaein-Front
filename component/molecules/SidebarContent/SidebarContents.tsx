"use client";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import MainLogo from "@/component/atoms/Logo/MainLogo";
import AdimnUserInforSection from "@/component/organisms/Section/AdminUserInfoSection";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  HStack,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FiCompass, FiHome, FiTrendingUp } from "react-icons/fi";

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "idols", icon: FiTrendingUp },
  { name: "schedules", icon: FiCompass },
];

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <HStack>
          <MainLogo
            width={20}
            height={20}
            fontSize={[15, 20, 30]}
            margin="0px"
          />
        </HStack>
        <HStack>
          <ButtonAtom
            onClick={toggleColorMode}
            color={colorMode === "light" ? "black" : "white"}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </ButtonAtom>
          <ButtonAtom onClick={onClose}>X</ButtonAtom>
        </HStack>
      </Flex>
      <AdimnUserInforSection />
      {LinkItems.map((link) => (
        <NavItem key={link.name} link={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
}
const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Link href={`/admin/${link}`} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SidebarContent;
