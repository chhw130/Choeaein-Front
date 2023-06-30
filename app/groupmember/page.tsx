import GroupMemeberContainer from "@/component/groupMemberPage/GroupMemeberContainer";
import { getIdolMember } from "@/utils/API/SSGSetting";
import { GroupType } from "@/utils/interface/interface";
import React from "react";

const getData = async (groupName: string) => {
  const groupMemberData: GroupType = await getIdolMember(groupName);
  return { groupMemberData };
};

const GroupMemberPage = async ({ searchParams }: any) => {
  const groupName = searchParams;

  // const { groupMemberData } = await getData(groupName);
  const groupMemberData: any = [];

  console.log(groupName);

  return (
    <main>
      <GroupMemeberContainer groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
