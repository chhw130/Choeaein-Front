import GroupContainer from "@/component/groupMemberPage/GroupContainer";
import MemberSection from "@/component/groupMemberPage/MemberSection";
import { getIdolMember, getIdolMemberAlbum } from "@/utils/API/SSGSetting";
import { GroupType, IdolAlbumType } from "@/utils/interface/interface";
import React from "react";

interface GroupMemberPageProps {
  searchParams: { group: string };
}

const GroupMemberPage = async ({ searchParams }: GroupMemberPageProps) => {
  const groupName: string = searchParams.group;

  console.log(groupName);
  const groupMemberData: GroupType = await getIdolMember(groupName);
  const albumData: IdolAlbumType = await getIdolMemberAlbum(groupName);

  console.log(groupMemberData);

  return (
    <main>
      <GroupContainer groupMemberData={groupMemberData} albumData={albumData} />
      <MemberSection groupMemberData={groupMemberData} />
    </main>
  );
};

export default GroupMemberPage;
