import axios from "axios";
import { APIResponseType } from "../types/api";
import {
  CreateStudyType,
  StudiesResponseType,
  StudyResponseType,
} from "../types/study";
import { getUser } from "../utils";

const api = axios.create({
  baseURL: "http://3.214.168.45:8080/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/hal+json",
  },
});

export const getStudies = async () => {
  try {
    const res = await api.get<APIResponseType>("/study");
    return [res.data as StudiesResponseType, null];
  } catch (err) {
    return [null, err.response.data as StudiesResponseType];
  }
};

export const createStudy = async (study: CreateStudyType) => {
  try {
    const res = await api.post("/study", study, {
      headers: {
        Authorization: `Bearer ${getUser()?.token}`,
      },
    });
    return [res.data as StudyResponseType, null];
  } catch (err) {
    return [null, err.response.data as StudyResponseType];
  }
};
