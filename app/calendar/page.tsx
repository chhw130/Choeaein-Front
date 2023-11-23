import CalendarTemplate from "@/component/template/CalendarTemplate";
import { getIdolInform } from "@/utils/API/SSGSetting";
import { ChoeIdolType } from "@/utils/interface/interface";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export interface CalendarPageProps {
  searchParams: { idol: string };
}

export const generateMetadata = async ({
  searchParams,
}: CalendarPageProps): Promise<Metadata> => {
  const idolName = searchParams.idol;
  const idolData: ChoeIdolType = await getIdolInform(idolName);

  if(!idolData.pk) return notFound()

  const idolNameKr = idolData.idol_name_kr;
  const idolProfile = idolData.idol_profile;

  return {
    openGraph: {
      title: `최애인 `,
      description: `${idolNameKr} 스케줄을 확인해보세요!!`,
      images: [{ url: idolProfile }],
    },
  };
};

async function CalendarPage({ searchParams }: CalendarPageProps) {
  const idolName = searchParams.idol;

  const idolData: ChoeIdolType = await getIdolInform(idolName);

  return <CalendarTemplate idolData={idolData} />;
}

export default CalendarPage;
