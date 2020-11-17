import axios from "axios";
import { APIResponseType } from "../types/api";
import { UserResponseType } from "../types/auth";

const api = axios.create({
  baseURL: "http://3.214.168.45:8080/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/hal+json",
  },
});

export const onLogin = async (email: string, password: string) => {
  try {
    const data = {
      email,
      password,
    };
    const res = await api.post<APIResponseType>(`/auth/login`, data);
    return [res.data as UserResponseType, null];
  } catch (err) {
    return [null, err.response.data as UserResponseType];
  }
};

export const authEmail = async (email: string) => {
  try {
    const res = await api.get<APIResponseType>(`/user/check-email/${email}`);
    return [res.data, null];
  } catch (err) {
    return [null, err.response.data];
  }
};

export const authNickname = async (nickname: string) => {
  try {
    const res = await api.get<APIResponseType>(`/user/check-nickname?nickname=` + nickname);
    return [res.data, null];
  } catch (err) {
    return [null, err.response.data];
  }
};