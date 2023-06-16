import { IdolGroup } from "@/app/page";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IdolCardProps {
  data: IdolGroup | any;
}

const IdolCard = ({ data }: IdolCardProps) => {
  console.log(data.grou);

  return (
    <Box textAlign="center" margin="30px 0" w={["24%", "24%", "23%"]}>
      <Link href={`calendar/1`} prefetch={false}>
        <Image
          src={data?.idol_profile || data?.group_profile}
          alt="아티스트 이미지"
          width={1000}
          height={1000}
          style={{
            width: "90%",
            height: "200px",
            maxWidth: "200px",
            maxHeight: "200px",
            borderRadius: "20%",
            objectFit: "contain",
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
          {data.idol_name_kr || data.groupname}
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
