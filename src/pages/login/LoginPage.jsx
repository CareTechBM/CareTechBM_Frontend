import { InputField } from "../../components/molecules/InputField"
import { useState } from 'react'
import {
    validateEmail, validateEmailMessage,
    validateText, validateTextMessage,
} from '../../shared/validators/'
import { useLogin } from "../../shared/hooks/useLogin"

export const LoginPage = () => {
    const [formState, setFormState] = useState({
        email: {
            name: 'email',
            field: "email",
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            name: 'password',
            field: 'password',
            value: '',
            isValid: false,
            showError: false,
        }
    });
    const { login, isLoading } = useLogin();

    const cleanForm = () => {
        setFormState({
            email: {
                name: 'email',
                field: "email",
                value: '',
                isValid: false,
                showError: false,
            },
            password: {
                name: 'password',
                field: 'password',
                value: '',
                isValid: false,
                showError: false,
            }
        });
    }

    const handleInputChange = (value, field) => {
        setFormState((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                value,
            },
        }));
        handleInputBlur(value, field);
    };

    const handleInputBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'password':
                isValid = validateText(value);
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(formState.email.value, formState.password.value);
        cleanForm();
    }

    const btnDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    return (
        <div className="grid place-items-center h-svh bg-[#2c3541]">
            <div className="place-items-center place-content-center">
                <div className="flex flex-col items-center gap-3 p-2 text-center">
                    <h1 className="font-bold text-white">BIENVENIDO A CARETECH</h1>
                    <img src="/src/assets/TechCare.png" className="w-1/6 figure-img" alt="Logo de CareTech" />
                </div>
                <form className="flex flex-col gap-3 w-2/3">
                    <InputField
                        field={formState.email.field}
                        label={"Email"}
                        value={formState.email.value}
                        onChangeHandler={handleInputChange}
                        placeholder={"Email"}
                        type="email"
                        showErrorMessage={formState.email.showError}
                        validationMessage={validateEmailMessage}
                        onBlurHandler={handleInputBlur}
                    />
                    <InputField
                        field={formState.password.field}
                        label={"Password"}
                        value={formState.password.value}
                        onChangeHandler={handleInputChange}
                        placeholder={"Pasword"}
                        type="password"
                        showErrorMessage={formState.password.showError}
                        validationMessage={validateTextMessage}
                        onBlurHandler={handleInputBlur}
                    />
                    <button className="btn btn-primary"
                        disabled={btnDisabled} onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
}
