import GroupMemberTemplate from "@/component/template/GroupMemberTemplate";
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
    <GroupMemberTemplate
      groupMemberData={groupMemberData}
      albumData={albumData}
    />
  );
};

export default GroupMemberPage;
