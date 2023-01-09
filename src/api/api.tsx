import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-li-maurus-w7g8.onrender.com",
    timeout: 7000
})
