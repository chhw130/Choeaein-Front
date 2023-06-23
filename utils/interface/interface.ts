export interface LoginData {
  username: string;
  // email?: string;
  password: string;
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
