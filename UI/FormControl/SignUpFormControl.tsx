import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import IdolOption from "../Select/IdolOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

interface SignUpformControlProps {
  label: string;
  inputId:
    | "username"
    | "password"
    | "passwordConfirm"
    | "name"
    | "birth"
    | "age"
    | "phone_number"
    | "pick"
    | "nickname"
    | "email";
  register: UseFormRegisterReturn;
  defaultText?: string;
  errorMessage: FieldError | undefined;
}

const SignUpFormControl = ({
  label,
  inputId,
  register,
  defaultText,
  errorMessage,
}: SignUpformControlProps) => {
  return (
    <FormControl marginBottom={3}>
      <FormLabel
        fontWeight={"semibold"}
        fontSize={["12px", "13px", "15px"]}
        htmlFor={inputId}
        _after={
          inputId !== "pick" ? { content: `"*"`, color: "red" } : undefined
        }
      >
        {label}
      </FormLabel>
      <InputGroup>
        {inputId === "pick" ? (
          <Select
            h={"50px"}
            id="pick"
            fontFamily={"heading"}
            placeholder="당신의 최애를 알려주세요."
            {...register}
          >
            <IdolOption />
          </Select>
        ) : (
          <>
            {inputId === "phone_number" && (
              <InputLeftAddon
                pointerEvents="none"
                children={<FontAwesomeIcon icon={faPhone} />}
                height="50px"
              />
            )}
            <Input
              id={inputId}
              type={
                inputId === "birth"
                  ? "date"
                  : inputId === "passwordConfirm"
                  ? "password"
                  : inputId
              }
              fontFamily={"heading"}
              h={"50px"}
              placeholder={defaultText}
              autoComplete="off"
              {...register}
            />
          </>
        )}
      </InputGroup>
      {errorMessage && (
        <Text
          textAlign={"end"}
          color={"red"}
          fontSize={"0.9rem"}
          _before={{ content: `"⚠"` }}
        >
          {errorMessage.message}
        </Text>
      )}
    </FormControl>
  );
};

export default SignUpFormControl;
