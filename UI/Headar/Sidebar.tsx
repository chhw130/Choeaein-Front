"use client";
import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  FlexProps,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import UserInform from "../../component/adminPage/UserInform";
import Link from "next/link";
import Image from "next/image";

import logo from "../../utils/img/logo_main.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "idols", icon: FiTrendingUp },
  { name: "schedules", icon: FiCompass },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { colorMode } = useColorMode();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} zIndex="1">
      <SidebarContent display={{ base: "none", md: "block" }} />

      <Box
        ml={{ base: 0, md: 60 }}
        p="4"
        bg={
          colorMode === "dark"
            ? "var(--chakra-colors-chakra-body-bg)"
            : "var(--chakra-colors-chakra-border-color)"
        }
      >
        {children}
      </Box>
    </Box>
  );
}

export const SidebarContent = ({ ...rest }) => {
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
          <Image
            src={logo}
            width={20}
            height={20}
            alt="myfavor"
            priority={true}
          />
        </HStack>
        <HStack>
          <Button
            onClick={toggleColorMode}
            color={colorMode === "light" ? "black" : "white"}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
      <UserInform />
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
