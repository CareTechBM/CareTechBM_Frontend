import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://care-tech-bm-backend.vercel.app/caretech/v1/',
    timeout: 5000
})

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