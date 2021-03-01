export interface InterestingType {
  code: number;
  name: string;
  skill_level: number;
  parent_code: number;
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
  user_created_at: string;
  user_updated_at: string;
  age: number;
  nickname: string;
  user_city_info: UserCityInfoType[];
  gender: string;
  interesting: InterestingType[];
  born_date: string;
  simple_introduce: string;
  profile: string;
  study_limit: number;
  week: string;
  week_type: number;
  state: number;
  city: number;
  state_name: string;
  city_name: string;
  user_active: boolean;
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
  content: StudyType[];
  links: LinksType;
  page_info: PageInfoType;
}

export interface StudiesResponseType {
  code: number;
  message: string;
  result: StudiesResultType;
  responseTime: string;
}

export interface StudyResponseType {
  code: number;
  message: string;
  result: StudyType;
  responseTime: string;
}

export interface CreateStudyType {
  title: string;
  study_limit: number;
  week: string;
  week_type: number;
  state: number;
  city: number;
  contents: string;
  category: number;
  topic: number;
  color: string;
  study_day: number;
}
