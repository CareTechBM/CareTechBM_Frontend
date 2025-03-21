import { login as loginRequest, register as registerRequest } from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await loginRequest({ email, password });

        if (response.error) {
            toast.error(response.e?.response.data.msg || 'Error al iniciar sesion');
            setIsLoading(false);
            return;
        } else {
            localStorage.setItem('token', 'Bearer '+response.data.userDetails.token);
            toast.success(response.data.msg || 'Inicio de sesion exitoso');
            setIsLoading(false);
            navigate('/principal');
            return;
        }
    }

    const register = async (name, lastname, email, password, role) => {
        setIsLoading(true);
        const response = await registerRequest({ name, lastname, email, password, role });

        if (response.error) {
            toast.error(response.e?.response.data || 'Error al registrar usuario');
            setIsLoading(false);
            return;
        } else {
            toast.success(response.data.msg || 'Usuario registrado exitosamente');
            setIsLoading(false);
            navigate('/login');
            return response.data;
        }
    }

    return { login, register, isLoading };
}