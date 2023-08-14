"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const EditUser = dynamic(() => import("../../myPage/EditUser"));
const MyReportSchedule = dynamic(() => import("../../myPage/MyReportSchedule"));

const EditUserTabs = () => {
  return (
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
  );
};

export default EditUserTabs;
