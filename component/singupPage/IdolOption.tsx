"use client";
import { getIdolList } from "@/utils/axios/AxiosSetting";
import { useQuery } from "@tanstack/react-query";

const IdolOption = () => {
  const { data: idolList } = useQuery(["idol"], () => getIdolList());

  /**최애 옵션 */

  return (
    <>
      {idolList?.map((data: any) => (
        <option key={data.pk} value={data.pk}>
          {data.idol_name_kr}
        </option>
      ))}
    </>
  );
};

export default IdolOption;
