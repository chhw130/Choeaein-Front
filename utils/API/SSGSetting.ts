const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_DEPLOY_BASE_URL}/api/v2`
    : `${process.env.NEXT_PUBLIC_DEPLOY_BASE_URL}/api/v2`;

export const getIdolRank = async () => {
  const res = await fetch(`${BASE_URL}/idols/rank/`, { cache: "no-cache" });
  return res.json();
};

/**아이돌 목록*/
export const getIdolList = async () => {
  const res = await fetch(`${BASE_URL}/idols/`);
  return res.json();
};

/**아이돌 랜덤데이터 */
export const getRandomSchedules = async () => {
  const res = await fetch(`${BASE_URL}/schedules/slide/`, {
    cache: "no-cache",
  });
  return res.json();
};

/**아이돌 그룹*/
export const getIdolGroups = async () => {
  const res = await fetch(`${BASE_URL}/groups/`);
  console.log(res);
  return res.json();
};

export const getIdolSolos = async () => {
  const res = await fetch(`${BASE_URL}/solos/`);
  return res.json();
};

/**특정 아이돌 그룹 정보 */
export const getIdolMember = async (group: string | null | undefined) => {
  const res = await fetch(`${BASE_URL}/groups/${group}`);
  return res.json();
};

export const getIdolMemberAlbum = async (group: string) => {
  const res = await fetch(`${BASE_URL}/albums/${group}`, { cache: "no-cache" });
  return res.json();
};

export const getIdolSoloAlbum = async (idol: string) => {
  const res = await fetch(`${BASE_URL}/albums/${idol}/`, { cache: "no-cache" });
  return res.json();
};

/**특정 솔로 아이돌 정보 */
export const getIdolSolo = async (idol: string | null | undefined) => {
  const res = await fetch(`${BASE_URL}/solos/${idol}/`);
  return res.json();
};

/**특정 아이돌 정보 */
export const getIdolInform = async (idolName: string) => {
  const res = await fetch(`${BASE_URL}/idols/${idolName}/`);
  return res.json();
};
