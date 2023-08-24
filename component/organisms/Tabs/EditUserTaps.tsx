"use client";

import UserScheduleList from "@/component/molecules/List/UserScheduleList";
import TextAtom from "@/component/atoms/Text/TextAtom";
import EditNickname from "@/component/molecules/EditBox/EditNickname";
import EditPassword from "@/component/molecules/EditBox/EditPassword";
import EditPick from "@/component/molecules/EditBox/EditPick";
import EditUserImg from "@/component/molecules/EditUserImg/EditUserImg";
import { getMyReportSchedules } from "@/utils/API/CSRSetting";
import useUser from "@/utils/hook/useUser";
import { MypageReportSchedule } from "@/utils/interface/interface";
import {
  Box,
  Flex,
  HStack,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const EditUserTabs = () => {
  const { userData } = useUser();
  const { data: userReportData = [], isLoading } = useQuery([`myReport`], () =>
    getMyReportSchedules()
  );

  return (
    <Tabs as={"section"} isFitted variant="enclosed" isLazy>
      <TabList mb="1em">
        <Tab>내정보</Tab>
        <Tab>제보한 일정</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <EditUserImg />
          <hr />
          <VStack
            padding="30px 0"
            margin=" 0 auto"
            fontSize={["12px", "13px", "15px"]}
            spacing={6}
          >
            <EditPick userData={userData} />
            <Flex justifyContent="space-between" width="80%" height="40px">
              <HStack spacing={5}>
                <TextAtom w="70px" fontWeight={"bold"} fontSize={"lg"}>
                  아이디
                </TextAtom>
                <TextAtom>{userData?.email}</TextAtom>
              </HStack>
            </Flex>
            <EditPassword />
            <EditNickname />
          </VStack>
        </TabPanel>
        <TabPanel>
          <Box h={"60vh"} as="ul" listStyleType={"none"} alignItems={"center"}>
            {!isLoading ? (
              userReportData.map((userReport: MypageReportSchedule) => {
                return (
                  <UserScheduleList
                    userReport={userReport}
                    key={userReport.pk}
                  />
                );
              })
            ) : (
              <Skeleton h={"100%"} />
            )}
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default EditUserTabs;
