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
}

export interface SignUpData extends UserDataType {
  username?: string;
  password: string;
  passwordConfirm?: string;
  name: string;
  birth?: string;
  age?: number;
  phone_number?: string;
}

/**아이돌 타입 */
interface IdolType {
  idol_name_en: string;
  idol_name_kr: string;
}

export interface IdolSoloType extends IdolType {
  enter: string;
  solo_profile: string;
}
export interface MemberType extends IdolType {
  idol_profile: string;
  idol_birthday: string;
}

export interface IdolGroupType {
  enter: string;
  group_profile: string;
  groupname: string;
}

export interface GroupType extends IdolGroupType {
  pk: number;
  group_debut: string;
  group_insta: string;
  group_youtube: string;
  member: MemberType[];
}
