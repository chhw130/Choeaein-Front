"use client";
import React, { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerContent,
  FlexProps,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import SidebarContent from "@/component/molecules/SidebarContent/SidebarContents";
import { FiMenu } from "react-icons/fi";
import MainLogo from "@/component/atoms/Logo/MainLogo";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")} zIndex="1">
      <SidebarContent
        display={{ base: "none", md: "block" }}
        onClose={onClose}
      />

      <MobileNav onOpen={onOpen} />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        returnFocusOnClose={false}
        size={"full"}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

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
};

export default Sidebar;

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      display={{ base: "flex", md: "none" }}
      position="fixed"
      width="100%"
      zIndex={100}
      px={{ base: 4, md: 4 }}
      height="65px"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <MainLogo width={20} height={20} fontSize={[15, 20, 30]} margin="0px" />
      <Box w={"40px"}></Box>
    </Flex>
  );
};
