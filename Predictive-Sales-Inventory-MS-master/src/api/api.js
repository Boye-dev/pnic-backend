import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: "https://pnic-backend-production.up.railway.app",
  withCredentials: true,
  credentials: "include",
});

export default api;
