import CalendarTemplate from "@/component/template/CalendarTemplate";
import CalnedarContainer from "@/component/template/CalendarTemplate";
import { getIdolInform } from "@/utils/API/SSGSetting";
import { ChoeIdolType } from "@/utils/interface/interface";

export interface CalendarPageProps {
  params: { idolID: string };
  searchParams: { idol: string };
}

async function CalendarPage({ searchParams }: any) {
  const idolName = searchParams.idol;

  const idolData: ChoeIdolType = await getIdolInform(idolName);

  return <CalendarTemplate idolData={idolData} />;
}

export default CalendarPage;
