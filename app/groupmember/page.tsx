import GroupContainer from "@/component/groupMemberPage/GroupContainer";
import MemberSection from "@/component/groupMemberPage/MemberSection";
import { getIdolMember, getIdolMemberAlbum } from "@/utils/API/SSGSetting";
import { GroupType } from "@/utils/interface/interface";
import React from "react";

const getData = async (groupName: string) => {
  const groupMemberData: GroupType = await getIdolMember(groupName);
  return { groupMemberData };
};

interface GroupMemberPageProps {
  searchParams: { group: string };
}

const GroupMemberPage = async ({ searchParams }: GroupMemberPageProps) => {
  const groupName = searchParams.group;

  const { groupMemberData } = await getData(groupName);

  const albumData = await getIdolMemberAlbum(groupName);

  return (
    <main>
      <GroupContainer groupMemberData={groupMemberData} albumData={albumData} />
      <MemberSection groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
