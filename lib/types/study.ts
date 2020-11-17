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

export interface StudyType {
  study_seq: number;
  title: string;
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
  study_limit: number;
  week: string;
  week_type: number;
  state: number;
  city: number;
  state_name: string;
  city_name: string;
  full_address: string;
  contents: string;
  category: number;
  topic: number;
  category_name: string;
  topic_name: string;
  color: string;
  end_yn: boolean;
  study_day: number;
  views: number;
  users: any[];
  dateFormat: string;
  study_created_at_str: string;
  study_updated_at_str: string;
}

export interface DocsType {
  href: string;
}

export interface SelfType {
  href: string;
}

export interface LinksType {
  docs: DocsType;
  self: SelfType;
}

export interface PageInfoType {
  current_page: number;
  total_elements: number;
  total_pages: number;
}

export interface StudiesResultType {
  study: StudyType[];
  links: LinksType;
  page_info: PageInfoType;
}

export interface StudiesResponseType {
  code: number;
  message: string;
  result: StudiesResultType;
  responseTime: string;
}
