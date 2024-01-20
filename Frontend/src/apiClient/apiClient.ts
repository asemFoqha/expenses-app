import axios from "axios";

let token = sessionStorage.getItem("token")
  ? "Bearer " + JSON.parse(sessionStorage.getItem("token")!)
  : "";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { Authorization: token },
});

apiClient.interceptors.request.use(async (req) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  req.headers.Authorization = token ? "Bearer " + JSON.parse(token) : "";
  return req;
});
export default apiClient;
