import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdolCard = ({ data }: any) => {
  return (
    <Box textAlign="center" margin="30px 0" w={["24%", "24%", "23%"]}>
      <Link href={`calendar/${data.pk}`} prefetch={false}>
        <Image
          src={data?.idol_profile}
          alt="아티스트 이미지"
          width={200}
          height={200}
          style={{
            width: "90%",
            height: "auto",
            maxWidth: "200px",
            maxHeight: "200px",
            borderRadius: "20%",
            objectFit: "cover",
            margin: "0 auto",
            objectPosition: "center",
            cursor: "pointer",
          }}
          loading="lazy"
        />
        <Text
          fontFamily="fantasy"
          paddingTop={"20px"}
          margin={0}
          fontSize="1.6vw"
          letterSpacing="-0.19px"
          cursor={"pointer"}
        >
          {data.idol_name_kr}
        </Text>
        <Text
          margin={0}
          fontSize="1.6vw"
          letterSpacing="-0.19px"
          color={"#888888"}
        >
          {data.idol_name_en}
        </Text>
      </Link>
    </Box>
  );
};

export default IdolCard;
