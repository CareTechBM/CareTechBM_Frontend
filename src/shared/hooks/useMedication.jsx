import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createMedication as createMedicationRequest, 
    getMedication as getMedicationRequest, 
    updateMedication as updateMedicationRequest,
    deleteMedication as deleteMedicationRequest
 } from '../../services/api.jsx';

 export const useMedication = () => {
    const [medication, setMedication] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createMedication = async (name, description, price, currency, dateExpiration, amount) => {
        setIsLoading(true);
        const response = await createMedicationRequest({name, description, price, currency, dateExpiration, amount});
    
        if(response.error){
            toast.error(response.e?.response.data || 'Error al registrar medicamento');
            setIsLoading(false);
            return;
        }else{
            toast.success(response.data.msg || 'Medicamento registrado exitosamente');
            setMedication(response.data);
            setIsLoading(false);
            return response.data;
        }
    }

    const getMedication = async () => {
        setIsLoading(true);
        const response = await getMedicationRequest();

        if(response.error){
            toast.error(response.e?.response.data || 'Error al obtener el medicamento');
            setIsLoading(false);
            return;
        }else{
            toast.success('Medicamentos obtenidos exitosamente');
            setMedication(response.data);
            setIsLoading(false);
            return response.data;
        }
        
    }

    const updateMedication = async (id, name, description, price, currency, dateExpiration, amount) => {
        setIsLoading(true);
        const response = await updateMedicationRequest({id, name, description, price, currency, dateExpiration, amount});
        if (response.error) {
            toast.error(response.e?.response.data || 'Error al actualizar medicamento');
            setIsLoading(false);
            return ;
        }else{
            toast.success(response.data || 'Medicamento actualizado exitosamente');
            setIsLoading(false);
            return response.data;
        }
    }

    const deleteMedication = async (id) => {
        setIsLoading(true);
        const response = await deleteMedicationRequest(id);
    
        if (response.error) {
            toast.error(response.e?.response.data || 'Error al eliminar medicamento');
            setIsLoading(false);
            return;
        } else {
            toast.success(response.data?.msg || 'Medicamento eliminado exitosamente');
            setIsLoading(false);
            return response.data;
        }
    };

    return{createMedication,getMedication, updateMedication, deleteMedication, medication, isLoading};
 }
