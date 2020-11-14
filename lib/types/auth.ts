export interface InterestingType {
  name: string;
  skill_level: string;
}

export interface UserCityInfoType {
  state_code: number;
  state_name: string;
  city_code: number;
  city_name: string;
}

export interface UserType {
  users_seq: number;
  email: string;
  nickname: string;
  age: number;
  gender: string;
  interesting: InterestingType[];
  simple_introduce: string;
  profile: string;
  user_city_info: UserCityInfoType[];
  user_created_at: string;
  user_updated_at: string;
  user_active: boolean;
}

export interface UserResultType {
  token: string;
  user: UserType;
}

export interface UserResponseType {
  code: number;
  message: string;
  result: UserResultType;
  responseTime: string;
}
