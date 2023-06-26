import GroupMemeberContainer from "@/component/groupMemberPage/GroupMemeberContainer";
import { getIdolMember } from "@/utils/API/SSGSetting";
import { GroupType } from "@/utils/interface/interface";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (groupName: string) => {
  const groupMemberData: GroupType = await getIdolMember(groupName);
  return { groupMemberData };
};

const GroupMemberPage = async ({ params }: any) => {
  const groupName = params?.group;
  const { groupMemberData } = await getData(groupName);

  return (
    <main>
      <GroupMemeberContainer groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
