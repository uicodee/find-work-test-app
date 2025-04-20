import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com",
});
