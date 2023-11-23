import NotFoundTemplate from "@/component/template/NotFoundTemplate";
import { getIdolRank } from "@/utils/API/SSGSetting";
import { ChoeIdolType } from "@/utils/interface/interface";

export default async function NotFound() {
  const idolRankData: ChoeIdolType[] = await getIdolRank();

  return <NotFoundTemplate idolRankData={idolRankData} />;
}
