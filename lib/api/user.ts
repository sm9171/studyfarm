import axios from "axios";
import { APIResponseType } from "../types/api";
import { UserResponseType } from "../types/user";

const api = axios.create({
    baseURL: "http://3.214.168.45:8080/api/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/hal+json",
    },
});
import { getUser } from "../utils";

export const getUserInfo = async (seq: number) => {
    try {
        const res = await api.get<APIResponseType>(`/user/${seq}`, {
            headers: {
                Authorization: `Bearer ${getUser()?.token}`,
            },
        });
        return [res.data as UserResponseType, null];
    } catch (err) {
        return [null, err.response.data as UserResponseType];
    }
};