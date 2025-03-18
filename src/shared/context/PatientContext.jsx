import { createContext } from "react";
import { useState } from "react";

const PatientContext = createContext();

function PatientProvider({ children }) {
    const [formPatient, setFormPatient] = useState({
        name: {
            field: "name",
            value: "",
            isValid: true,
        },
        lastName: {
            field: "lastName",
            value: "",
            isValid: true,
        },
        birthdate: {
            field: "birthdate",
            value: "",
            isValid: true,
        },
        sex: {
            field: "sex",
            value: "",
            isValid: true,
        },
        address: {
            field: "address",
            value: "",
            isValid: true,
        },
        phone: {
            field: "phone",
            value: "",
            isValid: true,
        },
        email: {
            field: "email",
            value: "",
            isValid: true,
        }
    });
    const [edit, setEdit] = useState(false);
    const [idPatient, setIdPatient] = useState("");

    const validateForm = (field, value) => {
        let isValid = false;
        switch (field) {
            case "name":
                isValid = value.length > 0;
                break;
            case "lastName":
                isValid = value.length > 0;
                break;
            case "sex":
                if(value=='Seleccionar'){
                    isValid = false;
                }else{
                    isValid = true;
                }
                break;
            case "address":
                isValid = value.length > 0;
                break;
            case "phone":
                isValid = value.length > 0;
                break;
            case "email":
                isValid = value.length > 0;
                break;
            case "birthdate":
                try {
                    isValid = true;
                    if (value.$d == 'Invalid Date' || value === null || value =='') {
                        isValid = false;
                    }
                    /*if((new Date().getFullYear()-value.$d.getFullYear())>125){
                        isValid = false;
                    }*/
                } catch (error) {
                    isValid = false;
                }
                break;
            default:
                break;
        }
        return isValid;
    }


    const handleValueChange = (field, value) => {
        setFormPatient({
            ...formPatient,
            [field]: {
                ...formPatient[field],
                value: value,
                isValid: validateForm(field, value)
            }
        });
    }

    const handleInputBlur = (field, value) => {
        setFormPatient(prevState =>
        ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid: validateForm(field, value),
            }
        })
        );
    }

    function resetForm() {
        setFormPatient({
            name: {
                field: "name",
                value: "",
                isValid: true,
            },
            lastName: {
                field: "lastName",
                value: "",
                isValid: true,
            },
            birthdate: {
                field: "birthdate",
                value: "",
                isValid: true,
            },
            sex: {
                field: "sex",
                value: "",
                isValid: true,
            },
            address: {
                field: "address",
                value: "",
                isValid: true,
            },
            phone: {
                field: "phone",
                value: "",
                isValid: true,
            },
            email: {
                field: "email",
                value: "",
                isValid: true,
            }
        });
    }

    const valueIsNull = (value) => {
        for(let i in value){
            if(value[i].value === "" || value[i].value === null || value[i].value === undefined){ 
                return true;
            }
        }
    }
    
    const errorForm = !formPatient.name.isValid ||
        !formPatient.lastName.isValid ||
        !formPatient.birthdate.isValid ||
        !formPatient.sex.isValid ||
        !formPatient.address.isValid ||
        !formPatient.phone.isValid ||
        !formPatient.email.isValid ||
        valueIsNull(formPatient);


    return (
        <PatientContext.Provider value={{
            setFormPatient, errorForm, formPatient, idPatient, setIdPatient,
            resetForm, handleValueChange, handleInputBlur, edit, setEdit
        }}>
            {children}
        </PatientContext.Provider>
    )
};

export { PatientProvider, PatientContext };