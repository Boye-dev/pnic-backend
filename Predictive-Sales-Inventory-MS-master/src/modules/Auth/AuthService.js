import axios, { AxiosRequestConfig } from "axios";

export const baseUrl =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api";
// export const subscriber = new BehaviorSubject(0);
const Api = axios.create({
  baseURL: baseUrl,
});

export const login = async (payload) => {
  return Api.post("login/", payload).then((res) => res.data);
};
