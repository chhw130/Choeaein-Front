import EditUserContainer from "@/component/myPage/EditUserContainer";
import { getIdolGroups } from "@/utils/axios/AxiosSetting";
import { IdolGroup } from "../page";
const MyPage = async () => {
  const idolGroupData: IdolGroup[] = await getIdolGroups();

  return (
    <>
      <EditUserContainer />
    </>
  );
};

export default MyPage;
