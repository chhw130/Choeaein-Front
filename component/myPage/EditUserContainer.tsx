"use client";

import {
  Box,
  Center,
  Skeleton,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import MyReportSchedule from "./MyReportSchedule";
import useUser from "@/utils/hook/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EditUser = dynamic(() => import("./EditUser"), {
  loading: () => (
    <Skeleton h="600px">
      <Center position="absolute" top={400} left={680}>
        <Spinner size="xl" />
      </Center>
    </Skeleton>
  ),
});

const EditUserContainer = () => {
  const { isLoading, isLogin, userData } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLogin) router.push("/");
  }, [isLoading, isLogin, userData]);

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
