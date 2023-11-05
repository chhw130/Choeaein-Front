import GroupMemberTemplate from "@/component/template/GroupMemberTemplate";
import { getIdolMember, getIdolMemberAlbum } from "@/utils/API/SSGSetting";
import { GroupType, albumType } from "@/utils/interface/interface";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = async ({
  searchParams,
}: any): Promise<Metadata> => {
  const groupName: string = searchParams.group;
  const groupMemberData: GroupType = await getIdolMember(groupName);

  const groupNameKr = groupMemberData.groupname;

  return {
    openGraph: {
      title: `최애인 `,
      description: `${groupNameKr} 스케줄을 확인해보세요!!`,
      images: [{ url: groupMemberData.group_profile }],
    },
  };
};
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
