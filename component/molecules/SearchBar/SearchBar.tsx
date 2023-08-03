"use client";
import ButtonAtom from "@/component/atoms/Button/ButtonAtom";
import InputAtom from "@/component/atoms/Input/InputAtom";
import { InputGroup, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { GoSearch } from "react-icons/go";
import { toast } from "react-toastify";

const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const { colorMode } = useColorMode();

  const onChangeSearchBar = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;
      setKeyword(keyword);
    },
    []
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      return toast("공백 없이 입력해주세요!", {
        type: "error",
        theme: colorMode,
        autoClose: 2000,
        toastId: 1,
      });
    }
    router.push(`/search?keyword=${keyword}`);
  };

  return (
    <>
      <InputGroup as="form" onSubmit={(e) => submitHandler(e)}>
        <InputAtom
          placeholder="아이돌 검색"
          size={["sm", "sm", "md"]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeSearchBar(e)
          }
        />
        <ButtonAtom type="submit" size={["sm", "sm", "md"]}>
          <GoSearch />
        </ButtonAtom>
      </InputGroup>
    </>
  );
};

export default SearchBar;
