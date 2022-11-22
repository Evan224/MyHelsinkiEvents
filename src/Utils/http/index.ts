import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const { API_URL } = process.env;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["content-type"] = "application/json";

axios.interceptors.request.use(
  (config: any) => {
    config!.headers!.common!.setContentType = "application/json";
    return config;
  },
);
