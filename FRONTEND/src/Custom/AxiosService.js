import axios from "axios";

let accessToken = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");
const headers = {
  "Content-Type": "application/json",
  access: accessToken,
  refresh: refreshToken,
};

const apiService = axios.create({
  baseURL: "https://capstone-m52q.vercel.app/",

  headers: headers,
});

export default apiService;
