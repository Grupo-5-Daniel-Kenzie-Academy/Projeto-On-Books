import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-li-marus.onrender.com",
    timeout: 7000
})
