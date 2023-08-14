import NotFoundPage from "@/app/notFoundPage/NotFoundPage";
import { getIdolRank } from "@/utils/API/SSGSetting";

export default async function NotFound() {
  const idolRankData = await getIdolRank();

  return (
    <main>
      <NotFoundPage idolRankData={idolRankData} />
    </main>
  );
}
