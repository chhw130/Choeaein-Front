import CalnedarContainer from "@/component/calendarPage/CalnedarContainer";
import { specificIdolInform } from "@/utils/axios/AxiosSetting";

export interface CalendarPageProps {
  params: { idolID: string };
}

async function CalendarPage({ params }: CalendarPageProps) {
  const idolId = params.idolID;
  const idolData = await specificIdolInform(idolId);

  return (
    <>
      <CalnedarContainer params={params} idolData={idolData} />
    </>
  );
}

export default CalendarPage;
