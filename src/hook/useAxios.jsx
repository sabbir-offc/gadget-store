import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/",
  withCredentials: true,
});
const useAxios = () => {
  return instance;
};

export default useAxios;
