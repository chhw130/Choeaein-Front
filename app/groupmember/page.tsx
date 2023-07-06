import GroupContainer from "@/component/groupMemberPage/GroupContainer";
import MemberSection from "@/component/groupMemberPage/MemberSection";
import { getIdolMember } from "@/utils/API/SSGSetting";
import { GroupType } from "@/utils/interface/interface";
import React from "react";

const getData = async (groupName: string) => {
  const groupMemberData: GroupType = await getIdolMember(groupName);
  console.log(groupMemberData);
  return { groupMemberData };
};

interface GroupMemberPageProps {
  searchParams: { group: string };
}

const GroupMemberPage = async ({ searchParams }: GroupMemberPageProps) => {
  const groupName = searchParams.group;

  const { groupMemberData } = await getData(groupName);

  return (
    <main>
      <GroupContainer groupMemberData={groupMemberData} />
      <MemberSection groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
