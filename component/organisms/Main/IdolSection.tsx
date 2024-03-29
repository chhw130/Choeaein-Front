"use client";
import {
  Box,
  Flex,
  Highlight,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
useColorMode,
} from "@chakra-ui/react";
import { IdolGroupType, IdolSoloType } from "@/utils/interface/interface";
import TextAtom from "../../atoms/Text/TextAtom";
import Idol from "@/component/molecules/Idol/Idol";

interface IdolSectionProps {
  idolGroupData: IdolGroupType[];
  idolSoloData: IdolSoloType[];
}

const IdolSection = ({ idolGroupData, idolSoloData }: IdolSectionProps) => {

  const {colorMode} = useColorMode()
  
  return (
    <>
      <Box
        as="section"
        w={["98%", "90%", "90%"]}
        maxW="1400px"
        margin="10% auto 0 auto"
      >
        <VStack textAlign={"center"} spacing={50}>
          <TextAtom as={"h1"} fontSize={["1.5em", "2.6em", "3.8em"]}>
            다양한 아티스트들의 스케줄을
            <br/>
            <Highlight query='최애인'
             styles= {{ px: '4', py: '3' ,bg:  colorMode === "light" ? '#fccec0' : 'var(--chakra-colors-gray-700)', color : "#F6F6F6" , rounded : "var(--chakra-sizes-5)"}}
            >
              
            최애인
            </Highlight>
            &nbsp;에서 확인하세요.
          </TextAtom>

          <TextAtom
            as={"h2"}
            color={"#888888"}
            fontSize={["13px", "20px", "30px"]}
          >
            지금 인기있는 아티스트들을 선택하고
            <br />
            스케줄을 확인해서 나만의 스케줄을 만들어보세요.
          </TextAtom>
        </VStack>

        <Tabs isLazy padding={"5%"}>
          <TabList>
            <Tab
              w={"50%"}
              _selected={{ color: "white", bg: colorMode === "light" ? "#fccec0" : "var(--chakra-colors-gray-700)" }}
              borderTopRadius={"lg"}
              fontWeight={"extrabold"}
              fontSize={["1em", "1.5em", "2.2em"]}
            >
              그룹
            </Tab>
            <Tab
              w={"50%"}
              _selected={{ color: "white", bg: colorMode === "light" ? "#fccec0" : "grey" }}
              borderTopRadius={"lg"}
              fontWeight={"extrabold"}
              fontSize={["1em", "1.5em", "2.2em"]}
            >
              솔로
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding={0}>
              <Flex
                width="100%"
                flexWrap={"wrap"}
                justifyContent="space-around"
              >
                {idolGroupData?.map((data: IdolGroupType) => (
                  <Idol
                    key={data.pk}
                    groupname={data.groupname}
                    group_profile={data.group_profile}
                  />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel padding={0}>
              <Flex
                width="100%"
                flexWrap={"wrap"}
                justifyContent="space-around"
              >
                {idolSoloData?.map((data: IdolSoloType) => (
                  <Idol
                    key={data.pk}
                    idol_name_en={data.idol_name_en}
                    idol_name_kr={data.idol_name_kr}
                    solo_profile={data.solo_profile}
                  />
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
