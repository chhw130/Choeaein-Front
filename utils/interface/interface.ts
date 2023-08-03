/**유저 정보 */
interface UserType {
  email: string;
}
interface UserDataType extends UserType {
  pick: string | number;
  nickname: string;
}

export interface LoginData extends UserType {
  password: string;
}

export interface UserData extends UserDataType {
  is_admin: boolean;
  pk: number;
  profileImg: string;
  idol_profile: string;
}

export interface SignUpData extends UserDataType {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  name: string;
  birth?: string;
  age?: number;
  phone_number?: string;
}

/**user가 제보한 report schedule */
export interface MypageReportSchedule extends IdolDateScheduleType {
  is_enroll: boolean;
  whoes: string[];
}

/**메인페이지 아이돌 타입 */
interface IdolType {
  idol_name_en: string;
  idol_name_kr: string;
  pk: number;
}

export interface IdolSoloType extends IdolType {
  enter: string;
  solo_profile: string;
}

/**아이돌 디테일 페이지 타입 */
export interface MemberType extends IdolType {
  idol_profile: string;
  idol_birthday: string;
}

export interface IdolGroupType {
  enter: string;
  group_profile: string;
  groupname: string;
  pk: number;
}

export interface GroupType extends IdolGroupType {
  pk: number;
  group_debut: string;
  group_insta: string;
  group_youtube: string;
  member: MemberType[];
}

export interface SoloType extends IdolSoloType {
  pk: number;
  group_debut: string;
  group_insta: string;
  group_youtube: string;
}

/**아이돌 앨범 타입 */
export interface albumType {
  pk: number;
  album_name: string;
  album_cover: string;
}

export interface GroupMember extends IdolType {
  idol_birthday: string;
  idol_profile: string;
}

/**특정 한명의 아이돌 타입 */
export interface ChoeIdolType extends IdolType {
  pk: number;
  idol_profile: string;
  is_solo: boolean;
  group: string[];
  idol_birthday: string;
  has_schedules: boolean;
  viewCount?: number;
  pickCount?: number;
}

export interface IdolDateScheduleType {
  ScheduleTitle: string;
  ScheduleType: { type: string };
  location: string;
  pk: number;
  when: string;
}

/**아이돌 스케줄 */
export interface RandomIdolSchedule extends IdolDateScheduleType {
  participant: { idol: string };
}
