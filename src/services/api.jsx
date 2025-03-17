import axios from "axios";

const apiClient = axios.create({
    /*baseURL: 'https://care-tech-bm-backend.vercel.app/caretech/v1/',*/
    baseURL: 'http://localhost:8080/caretech/v1/',
    timeout: 5000
})

apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
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

export const register =async (page, pageSize)=>{
    try {
        return await apiClient.post('/auth/register', { page, pageSize });
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const createPatient = async (data)=>{
    console.log(data);
    try {
        return await apiClient.post('/patient/create', data);
    } catch (e) {
        return {
            error:true,
            e
        }
    }
}

export const getPatient= async (data)=>{
    try {
        return await apiClient.get('/patient/', {params:data});
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

export const getMedication = async () => {
    try {
        return await apiClient.get('/medicine/view')
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const createMedication = async (data) => {
    try {
        return await apiClient.post('/medicine/create', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const updateMedication = async (data) => {
    try {
        return await apiClient.put(`/medicine/update/${data.id}`, data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const deleteMedication = async (id) => {
    try {
        return await apiClient.delete(`/medicine/delete/${id}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}
