const env = require("dotenv");
env.config();

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.MY_BASEURL,
});

export const apiKey = process.env.MY_APIKEY;
