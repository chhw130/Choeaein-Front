import GroupMemeberContainer from "@/component/groupMemberPage/GroupMemeberContainer";
import { getIdolMember } from "@/utils/API/SSGSetting";
import React from "react";

const getData = async (groupName: string) => {
  const groupMemberData = await getIdolMember(groupName);
  return { groupMemberData };
};

const GroupMemberPage = async ({ params }: any) => {
  const groupName = params?.group;
  const { groupMemberData } = await getData(groupName);

  console.log(groupMemberData);

  return <main>{/* <GroupMemeberContainer /> */}</main>;
};

export default GroupMemberPage;
