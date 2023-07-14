"use client";
import React, { ReactNode } from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Text,
  HStack,
  Button,
  useColorMode,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import UserInform from "../../component/adminPage/UserInform";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import logoImage from "../../public/img/logo_main.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GoSearch } from "react-icons/go";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} zIndex="1">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      {/* <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer> */}
      {/* mobilenav */}
      {/* <MobileNav onOpen={onOpen} /> */}
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

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
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
            src={logoImage}
            width={20}
            height={20}
            alt="myfavor"
            priority={true}
          />
          <Text>CHOEAEIN</Text>
        </HStack>
        <HStack>
          <Button
            onClick={toggleColorMode}
            color={colorMode === "light" ? "black" : "white"}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </HStack>
      </Flex>
      <UserInform />
      <InputGroup margin="0px 16px" padding="16px">
        <Input placeholder="아이돌을 검색하세요." fontSize="0.7rem" w="50%" />
        <InputRightAddon children={<GoSearch />} padding="0px 8px" />
      </InputGroup>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          link={link.name}
          icon={link.icon}
          onClick={onClose}
        >
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
