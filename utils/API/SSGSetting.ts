import axios from "axios";

const url = process.env.NEXT_PUBLIC_DEV_BASE_URL;

/**아이돌 목록*/
export const getIdolList = async () => {
  const res = await fetch(`${url}/idols/`);
  return res.json();
};

/**아이돌 그룹*/
export const getIdolGroups = async () => {
  const res = await fetch(`${url}/groups/`);
  return res.json();
};

export const getIdolSolos = async () => {
  const res = await fetch(`${url}/solos/`);
  return res.json();
};

/**특정 아이돌 그룹 정보 */
export const getIdolMember = async (group: string | null | undefined) => {
  const res = await fetch(`${url}/groups/${group}`);
  return res.json();
};

/**특정 아이돌 정보 */
export const getIdolInform = async (idolId: any) => {
  const res = await fetch(`${url}/idols/${idolId}/`);
  return res.json();
};
