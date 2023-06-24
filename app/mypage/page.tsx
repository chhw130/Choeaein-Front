import EditUserContainer from "@/component/myPage/EditUserContainer";
import { getIdolGroups } from "@/utils/axios/AxiosSetting";
import { IdolGroup } from "../page";
const MyPage = async () => {
  return (
    <>
      <EditUserContainer />
    </>
  );
};

export default MyPage;
