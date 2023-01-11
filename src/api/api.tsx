import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-on-books.onrender.com",
    timeout: 7000
})
