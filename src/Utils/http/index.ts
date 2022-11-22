import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const { API_URL } = process.env;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["x-mock-match-request-body"] = true;
axios.defaults.headers.post["content-type"] = "application/json";
