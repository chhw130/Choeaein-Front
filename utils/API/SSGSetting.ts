const url = process.env.NEXT_PUBLIC_DEV_BASE_URL;

/**아이돌 목록*/
export const getIdolList = async () => {
  const res = await fetch(`${url}/idols/`);
  return res.json();
};

/**아이돌 랜덤데이터 */
export const getRandomSchedules = async () => {
  const res = await fetch(`${url}/schedules/slide/`);
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

export const getIdolMemberAlbum = async (group: string) => {
  const res = await fetch(`${url}/albums/${group}`);
  return res.json();
};

export const getIdolSoloAlbum = async (idol: string) => {
  const res = await fetch(`${url}/albums/${idol}/`);
  return res.json();
};

/**특정 솔로 아이돌 정보 */
export const getIdolSolo = async (idol: string | null | undefined) => {
  const res = await fetch(`${url}/solos/${idol}/`);
  return res.json();
};

/**특정 아이돌 정보 */
export const getIdolInform = async (idolName: string) => {
  const res = await fetch(`${url}/idols/${idolName}/`);
  return res.json();
};
