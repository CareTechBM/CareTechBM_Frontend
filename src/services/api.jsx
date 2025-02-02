import axios from "axios";

const apiClient = axios.create({
    baseURL: '',
    timeout: 5000
})