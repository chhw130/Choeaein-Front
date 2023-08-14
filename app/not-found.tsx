import NotFoundTemplate from "@/component/template/NotFoundTemplate";
import { getIdolRank } from "@/utils/API/SSGSetting";

export default async function NotFound() {
  const idolRankData = await getIdolRank();

  return <NotFoundTemplate idolRankData={idolRankData} />;
}
