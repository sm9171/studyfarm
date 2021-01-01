export type ClientUserType = {
  // *** 현재 백단 API 안 맞아서 일단 token 값만 씀
  // email: string;
  // username: string;
  token: string;
};

export interface UserResponseType {
  code: number;
  message: string;
  result: userType;
  responseTime: string;
}

export interface userType {
  users_seq: number;
  email: string;
  user_created_at: string;
  user_updated_at: string;
  name: string;
  age: number;
  nickname: string;
  gender: string;
  interesting: interesting[];
  born_data: string;
  user_city_info: user_city_info[];
  simple_introduce: string;
  profile: string;
  user_active: boolean;
  user_info_process: boolean;
}

export interface interesting {
  code: number;
  name: string;
  skill_level: number;
  parent_code: number;
};

export interface user_city_info {
  state_code: number;
  state_name: string;
  city_code: number;
  city_name: string;
}