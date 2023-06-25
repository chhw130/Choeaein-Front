"use client";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import IdolCard from "@/UI/Card/IdolCard";
import { IdolGroup } from "@/app/page";

interface IdolSectionProps {
  idolGroupData: IdolGroup[];
}

const IdolSection = ({ idolGroupData }: IdolSectionProps) => {
  return (
    <>
      <Box as="section" w={["98%", "98%", "90%"]} maxW="950px" margin="0 auto">
        <VStack textAlign={"center"} margin={"50px 0"} spacing={50}>
          <Box fontSize={["15px", "30px", "50px"]}>
            <Text>다양한 아티스트들의 스케줄을</Text>
            <Text>최애인에서 확인하세요.</Text>
          </Box>
          <Box
            color={"#888888"}
            letterSpacing={"-0.6px"}
            fontSize={["13px", "20px", "30px"]}
          >
            <Text>지금 인기있는 아티스트들을 선택하고</Text>
            <Text>스케줄을 확인해서 나만의 스케줄을 만들어보세요</Text>
          </Box>
        </VStack>

        <Tabs>
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
                {idolGroupData?.map((data: IdolGroup, index) => (
                  <IdolCard data={data} key={index} />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>solo</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default IdolSection;
