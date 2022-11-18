import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const { API_URL } = process.env;

axios.defaults.baseURL = API_URL;
