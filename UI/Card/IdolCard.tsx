import { IdolGroup } from "@/app/page";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IdolCardProps {
  data: IdolGroup | any;
}

const IdolCard = ({ data }: IdolCardProps) => {
  const router = useRouter();

  const idolCardHandler = (groupName: string) => {
    router.push(`/groupmember?group=${groupName}`);
  };
  return (
    <Box
      onClick={() => idolCardHandler(data.groupname)}
      textAlign="center"
      margin="30px 0"
      w={["24%", "24%", "23%"]}
    >
      {/* <Link href={`calendar/${data.groupname}`} prefetch={false}> */}
      <Image
        src={data?.idol_profile || data?.group_profile}
        alt="아티스트 이미지"
        width={1000}
        height={1000}
        loading="lazy"
        style={{
          width: "90%",
          aspectRatio: "1/1",
          maxWidth: "200px",
          maxHeight: "200px",
          borderRadius: "20%",
          objectFit: "cover",
          margin: "0 auto",
          cursor: "pointer",
        }}
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
      {/* </Link> */}
    </Box>
  );
};

export default IdolCard;
