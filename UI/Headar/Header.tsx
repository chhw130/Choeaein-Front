"use client";
import "./Header.scss";
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Input,
  InputGroup,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import HeaderBtn from "@/UI/Headar/HeaderBtn";
import { SidebarContent } from "@/UI/Headar/Sidebar";
import logo from "../../public/img/logo_main.png";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "../Toast/useToast";

const Header = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyword, setKeyword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      return useToast("공백 없이 입력해주세요!");
    }
    router.push(`/search?keyword=${keyword}`);
  };

  return (
    <>
      <ToastContainer />
      <Flex
        as="nav"
        position="fixed"
        w="100%"
        justifyContent="center"
        display={["none", "none", "flex"]}
        zIndex={20}
        bg={colorMode === "light" ? "white" : "#171923"}
        height="4rem"
      >
        <Flex w={"96%"} justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/">
            <HStack>
              <Image src={logo} height={20} width={20} alt="choe" />
              <Box fontSize={20} fontWeight={"bold"}>
                CHOEAEIN
              </Box>
            </HStack>
          </Link>

          <HStack>
            <InputGroup
              as="form"
              marginRight="10px"
              onSubmit={(e) => submitHandler(e)}
            >
              <Input
                placeholder="아이돌을 검색해보세요."
                fontSize="0.9rem"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const keyword = e.target.value;
                  setKeyword(keyword);
                }}
              />
              <Button type="submit">
                <GoSearch />
              </Button>
            </InputGroup>
            <Button
              onClick={toggleColorMode}
              color={colorMode === "light" ? "black" : "white"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <div className="navItem">
              <HeaderBtn />
            </div>
          </HStack>
        </Flex>
      </Flex>

      <MobileNav onOpen={onOpen} />
      <Drawer
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
      </Drawer>
    </>
  );
};
export default Header;
