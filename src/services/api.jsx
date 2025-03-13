import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://care-tech-bm-backend.vercel.app/caretech/v1/',
    timeout: 5000
})

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export const login =async (data)=>{
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const register =async (data)=>{
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const createPatient = async (data)=>{
    try {
        return await apiClient.post('/patient/create', data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const getPatient= async ()=>{
    try {
        return await apiClient.get('/patient/');
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const updatePatient = async (id, data)=>{
    try {
        return await apiClient.put(`/patient/${data.id}`, data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}