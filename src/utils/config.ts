import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = API_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

// axios.interceptors.response.use(
//   (response: any) => {
//     console.log("interceptor response", response);
//     return response;
//   },
//   (error: any) => {
//     console.log("interceptor error", error);
//     return error;
//   },
// );
