import axios from "axios";

let token = sessionStorage.getItem("token")
  ? "Bearer " + JSON.parse(sessionStorage.getItem("token")!)
  : "";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: { Authorization: token },
});

apiClient.interceptors.request.use(async (req) => {
  req.headers.Authorization = sessionStorage.getItem("token")
    ? "Bearer " + JSON.parse(sessionStorage.getItem("token")!)
    : "";
  return req;
});
export default apiClient;
