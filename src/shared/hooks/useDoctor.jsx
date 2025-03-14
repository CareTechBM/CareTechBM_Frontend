import {
    createDoctor as createDoctorRequest,
    getDoctor as getDoctorRequest,
    updateDoctor as updateDoctorRequest,
    deleteDoctor as deleteDoctorRequest
} from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const useDoctor = () => {
    const [doctor, setDoctor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createDoctor = async () => {
        setIsLoading(true);
        const response = await createDoctorRequest();
        if (response.error) {
            toast.error('Error creating doctor');
            setIsLoading(false);
            return;
        } else {
            toast.success(response.data || 'Doctor created successfully');
            setIsLoading(false);
            return response.data;
        }
    }

    const getDoctor = async () => {
        setIsLoading(true);
        const response = await getDoctorRequest();
        console.log(response);
        if (response.error) {
            toast.error('Error getting doctor');
            setIsLoading(false);
            return;
        } else {
            toast.success('Doctor obtained successfully');
            setDoctor(response.data);
            setIsLoading(false);
            return response.data;
        }
    }

    const updateDoctor = async (id, name, lastName, specialty, collegiate, phone, email) => {
        setIsLoading(true);
        const response = await updateDoctorRequest({ id, name, lastName, specialty, collegiate, phone, email });
        if (response.error) {
            toast.error('Error updating doctor');
            setIsLoading(false);
            return;
        } else {
            toast.success(response.data || 'Doctor updated successfully');
            setIsLoading(false);
            return response.data;
        }
    }

    const deleteDoctor = async (id) => {
        setIsLoading(true);
        const response = await deleteDoctorRequest(id);
        if (response.error) {
            toast.error('Error deleting doctor');
            setIsLoading(false);
            return;
        } else {
            toast.success(response.data || 'Doctor deleted successfully');
            setIsLoading(false);
            return response.data;
        }
    }

    return { createDoctor, getDoctor, updateDoctor, deleteDoctor, doctor, isLoading }
}