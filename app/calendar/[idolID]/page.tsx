import CalnedarContainer from "@/component/calendarPage/CalnedarContainer";
import { getIdolInform } from "@/utils/API/SSGSetting";

export interface CalendarPageProps {
  params: { idolID: string };
}

async function CalendarPage({ params }: CalendarPageProps) {
  const idolId = params.idolID;
  const idolData = await getIdolInform(idolId);

  return (
    <main>
      <CalnedarContainer params={params} idolData={idolData} />
    </main>
  );
}

export default CalendarPage;
