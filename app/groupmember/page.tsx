import GroupContainer from "@/component/groupMemberPage/GroupContainer";
import MemberSection from "@/component/groupMemberPage/MemberSection";
import { getIdolMember, getIdolMemberAlbum } from "@/utils/API/SSGSetting";
import { GroupType, albumType } from "@/utils/interface/interface";
import React from "react";

interface GroupMemberPageProps {
  searchParams: { group: string };
}

const GroupMemberPage = async ({ searchParams }: GroupMemberPageProps) => {
  const groupName: string = searchParams.group;

  const groupMemberData: GroupType = await getIdolMember(groupName);
  const albumData: albumType[] = await getIdolMemberAlbum(groupName);

  return (
    <main>
      <GroupContainer idolData={groupMemberData} albumData={albumData} />
      <MemberSection groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
