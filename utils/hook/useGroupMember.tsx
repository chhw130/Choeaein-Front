import { useQuery } from "@tanstack/react-query";
import { getIdolMember } from "../axios/AxiosSetting";
import { Group } from "../interface/interface";

interface GroupMemberHook {
  groupMemberData: Group;
  isLoading: boolean;
}

const useGroupMember = (group: string | null | undefined): GroupMemberHook => {
  const { data: groupMemberData = [], isLoading } = useQuery([group], () =>
    getIdolMember(group)
  );
  return { groupMemberData, isLoading };
};

export default useGroupMember;
