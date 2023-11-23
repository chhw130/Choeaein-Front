import GroupMemberTemplate from "@/component/template/GroupMemberTemplate";
import { getIdolMember, getIdolMemberAlbum } from "@/utils/API/SSGSetting";
import { GroupType, AlbumType } from "@/utils/interface/interface";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface GroupMemberPageProps {
  searchParams: { group: string };
}

export const generateMetadata = async ({
  searchParams,
}: GroupMemberPageProps): Promise<Metadata> => {
  const groupName: string = searchParams.group;
  const groupMemberData: GroupType = await getIdolMember(groupName);


  if(!groupMemberData.pk) return notFound()

  const groupNameKr = groupMemberData.groupname;

  return {
    openGraph: {
      title: `최애인 `,
      description: `${groupNameKr} 스케줄을 확인해보세요!!`,
      images: [{ url: groupMemberData.group_profile }],
    },
  };
};

const GroupMemberPage = async ({ searchParams }: GroupMemberPageProps) => {
  const groupName: string = searchParams.group;

  const groupMemberData: GroupType = await getIdolMember(groupName);
  const albumData: AlbumType[] = await getIdolMemberAlbum(groupName);

  return (
    <GroupMemberTemplate
      groupMemberData={groupMemberData}
      albumData={albumData}
    />
  );
};

export default GroupMemberPage;
