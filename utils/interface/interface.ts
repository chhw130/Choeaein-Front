export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  email: string;
  is_admin: boolean;
  nickname: string;
  pick: number;
  pk: number;
  profileImg: string;
}

export interface SignUpData {
  username?: string;
  password: string;
  passwordConfirm?: string;
  name: string;
  birth?: string;
  age?: number;
  phone_number?: string;
  nickname: string;
  pick: string | number;
  email: string;
}

export interface Member {
  idol_name_kr: string;
  idol_name_en: string;
  idol_profile: string;
  idol_birthday: string;
}
export interface Group {
  pk: number;
  enter: string;
  groupname: string;
  group_profile: string;
  group_debut: string;
  group_insta: string;
  group_youtube: string;
  member: Member[];
}
