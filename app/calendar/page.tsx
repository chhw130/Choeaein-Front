import CalnedarContainer from "@/component/calendarPage/CalendarContainer";
import { getIdolInform } from "@/utils/API/SSGSetting";

export interface CalendarPageProps {
  params: { idolID: string };
  searchParams: { idol: string };
}

async function CalendarPage({ searchParams }: any) {
  const idolName = searchParams.idol;

  const idolData = await getIdolInform(idolName);

  return (
    <main>
      <CalnedarContainer idolData={idolData} />
    </main>
  );
}

export default CalendarPage;
