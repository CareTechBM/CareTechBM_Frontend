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

/* API DE CONSULTAS PARA MEDICATION */
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

export const updateMedication = async ({id},data) => {
    try {
        return await apiClient.put(`/medicine/update/${id}`, data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const deleteMedication = async ({id}) => {
    try {
        return await apiClient.delete(`/medicine/delete/${id}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}