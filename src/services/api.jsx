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

export const updatePatient = async (data)=>{
    try {
        return await apiClient.put(`/patient/${data.id}`, data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const deletePatient = async (id)=>{
    try {
        return await apiClient.delete(`/patient/${id}`);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}



































export const createDoctor = async (data)=>{
    try {
        return await apiClient.post('/doctor/', data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const getDoctor = async ()=>{
    try {
        return await apiClient.get('/doctor/');
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const updateDoctor = async (data)=>{
    try {
        return await apiClient.put(`/doctor/${data.id}`, data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const deleteDoctor = async (id)=>{
    try {
        return await apiClient.delete(`/doctor/${id}`);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}   