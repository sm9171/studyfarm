import { ClientUserType } from './types/user';

export const timeAgo = (date: Date): string => {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + ' 년 전';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + ' 개월 전';
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + ' 일 전';
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + ' 시간 전';
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + ' 분 전';
  }
  return Math.floor(seconds) + ' 초 전';
};

export const setUser = (user: ClientUserType) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (!user.hasOwnProperty('token')) return null;
  else return user as ClientUserType;
};
