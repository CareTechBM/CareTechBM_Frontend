import { createPatient as createPatientRequest,
    getPatient as getPatientRequest,
    updatePatient as updatePatientRequest,
    deletePatient as deletePatientRequest,
    findPatientById as findPatientByIdRequest
} from '../../services/api.jsx';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const usePatient = () => {
    const [patient, setPatient] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createPatient = async (name, lastName, birthdate, sex, address, phone, email) => {
        setIsLoading(true);
        const response = await createPatientRequest({ name, lastName, birthdate, sex, address, phone, email });

        if (response.error) {
            toast.error(response.e?.response.data || 'Error al registrar paciente');
            setIsLoading(false);
            return ;
        }else{
            toast.success(response.data.msg || 'Paciente registrado exitosamente');
            setPatient(response.data);
            setIsLoading(false);
            return response.data;
        }
    }

    const getPatient = async (page, pageSize) => {
        setIsLoading(true);
        const response = await getPatientRequest(page,pageSize);
        if (response.error) {
            toast.error(response.e?.response?.data || 'Error al obtener pacientes');
            setIsLoading(false);
            return ;
        }else{
            toast.success('Pacientes obtenidos exitosamente');
            setPatient(response.data.patient);
            setIsLoading(false);
            return response.data;
        }
    }

    const findPatientById = async (id) => {
        setIsLoading(true);
        const response = await findPatientByIdRequest(id);

        if (response.error) {
            toast.error(response.e?.response.data || 'Error al obtener paciente');
            setIsLoading(false);
            return ;
        }else{
            toast.success('Paciente obtenido exitosamente');
            setPatient(response.data);
            setIsLoading(false);
            return response.data
        }
    }
    const updatePatient = async (id, name, lastName, birthdate, sex, address, phone, email) => {
        setIsLoading(true);
        const response = await updatePatientRequest({id, name, lastName, birthdate, sex, address, phone, email });

        if (response.error) {
            toast.error(response.e?.response.data || 'Error al actualizar paciente');
            setIsLoading(false);
            return ;
        }else{
            toast.success(response.data || 'Paciente actualizado exitosamente');
            setIsLoading(false);
            return response.data;
        }
    }

    const deletePatient =  async (id) => {
        setIsLoading(true);
        const response = await deletePatientRequest(id);
        if (response.error) {
            toast.error(response.e?.response.data || 'Error al eliminar paciente');
            setIsLoading(false);
            return ;
        }else{
            toast.success(response.data || 'Paciente eliminado exitosamente');
            setIsLoading(false);
            return response.data;
        }
    }

    return{createPatient, getPatient, updatePatient, findPatientById, deletePatient, patient, isLoading};
}