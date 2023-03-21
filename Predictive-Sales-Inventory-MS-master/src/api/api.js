import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://pnic-backend-production.up.railway.app",
  withCredentials: true,
  credentials: "include",
});
