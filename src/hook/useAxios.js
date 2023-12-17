import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true,
});



