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
