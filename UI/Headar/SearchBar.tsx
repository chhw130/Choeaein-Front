"use client";
import { Button, Input, InputGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useToast } from "../Toast/useToast";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      return useToast("공백 없이 입력해주세요!", "black", "error");
    }
    router.push(`/search?keyword=${keyword}`);
  };
  return (
    <InputGroup as="form" marginRight="10px" onSubmit={(e) => submitHandler(e)}>
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
  );
};

export default SearchBar;
