"use client";

import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";

const EditUser = dynamic(() => import("./EditUser"));
const MyReportSchedule = dynamic(() => import("./MyReportSchedule"));

const EditUserContainer = () => {
  return (
    <Box
      as="section"
      w={["90%", "80%", "60%"]}
      maxW={"700px"}
      padding="100px 0"
      margin="0 auto"
    >
      <Text fontSize={["20px", "25px", "30px"]} fontWeight="800" margin="10px">
        마이페이지
      </Text>

      <Tabs as={"section"} isFitted variant="enclosed" isLazy>
        <TabList mb="1em">
          <Tab>내정보</Tab>
          <Tab>제보한 일정</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EditUser />
          </TabPanel>
          <TabPanel>
            <MyReportSchedule />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default EditUserContainer;
