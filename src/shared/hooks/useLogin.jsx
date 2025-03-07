import {login as loginRequest} from '../../services/api';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await loginRequest({email, password});

        if(response.error) {
            toast.error(response.e?.response.data || 'Error al iniciar sesion');
            setIsLoading(false);;
        }else{
            localStorage.setItem('token', response.data.userDetails.token);
            toast.success(response.data.msg || 'Inicio de sesion exitoso');
            setIsLoading(false);
            navigate('/principal');
        }
        return;
    }

    return {login, isLoading};
}