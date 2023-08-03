"use client";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import IdolCard from "@/UI/Card/IdolCard";
import { IdolGroupType, IdolSoloType } from "@/utils/interface/interface";
import TextAtom from "../../atoms/Text/TextAtom";

interface IdolSectionProps {
  idolGroupData: IdolGroupType[];
  idolSoloData: IdolSoloType[];
}

const IdolSection = ({ idolGroupData, idolSoloData }: IdolSectionProps) => {
  return (
    <>
      <Box as="section" w={["98%", "98%", "90%"]} maxW="950px" margin="0 auto">
        <VStack textAlign={"center"} margin={"50px 0"} spacing={50}>
          <TextAtom as={"h1"} fontSize={["15px", "30px", "50px"]}>
            다양한 아티스트들의 스케줄을
            <br />
            최애인에서 확인하세요.
          </TextAtom>

          <TextAtom
            as={"h2"}
            color={"#888888"}
            fontSize={["13px", "20px", "30px"]}
          >
            지금 인기있는 아티스트들을 선택하고
            <br />
            스케줄을 확인해서 나만의 스케줄을 만들어보세요
          </TextAtom>
        </VStack>

        <Tabs isLazy>
          <TabList>
            <Tab
              w={"50%"}
              _selected={{ color: "white", bg: "#fccec0" }}
              borderTopRadius={"lg"}
              fontWeight={"extrabold"}
              fontSize={"20px"}
            >
              그룹
            </Tab>
            <Tab
              w={"50%"}
              _selected={{ color: "white", bg: "#fccec0" }}
              borderTopRadius={"lg"}
              fontWeight={"extrabold"}
              fontSize={"20px"}
            >
              솔로
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex
                width="100%"
                flexWrap={"wrap"}
                justifyContent="space-around"
              >
                {idolGroupData?.map((data: IdolGroupType) => (
                  <IdolCard data={data} key={data.pk} />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex
                width="100%"
                flexWrap={"wrap"}
                justifyContent="space-around"
              >
                {idolSoloData?.map((data: IdolSoloType) => (
                  <IdolCard data={data} key={data.pk} />
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default IdolSection;
