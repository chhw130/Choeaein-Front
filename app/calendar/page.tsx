import CalnedarContainer from "@/component/calendarPage/CalendarContainer";
import { getIdolInform } from "@/utils/API/SSGSetting";
import { ChoeIdolType } from "@/utils/interface/interface";

export interface CalendarPageProps {
  params: { idolID: string };
  searchParams: { idol: string };
}

async function CalendarPage({ searchParams }: any) {
  const idolName = searchParams.idol;

  const idolData: ChoeIdolType = await getIdolInform(idolName);

  console.log(idolData);

  return (
    <main>
      <CalnedarContainer idolData={idolData} />
    </main>
  );
}

export default CalendarPage;
