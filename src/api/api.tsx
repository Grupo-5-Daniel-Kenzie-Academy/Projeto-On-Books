import axios from "axios";

export const api = axios.create({
<<<<<<<<< Temporary merge branch 1
    baseURL: "http://localhost:3001",
    timeout: 7000
})
=========
  baseURL: "http://localhost:3001/",
  timeout: 7000,
});
