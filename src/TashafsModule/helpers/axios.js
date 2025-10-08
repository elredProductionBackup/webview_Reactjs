import axios from "axios";

const instance = axios.create({
  // baseURL: "https://dev.elred.io/",
  // baseURL: "https://test1.elred.io/",
  baseURL: "https://pretest.elred.io/",
    // baseURL: 'http://localhost:3000/',

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
