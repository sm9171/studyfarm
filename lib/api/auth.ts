import axios from "axios";
import { APIResponse } from "../types/api";

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
    const res = await api.post<APIResponse>(`/auth/login`, data);
    return [res.data as APIResponse, null];
  } catch (err) {
    return [null, err.response.data as APIResponse];
  }
};
