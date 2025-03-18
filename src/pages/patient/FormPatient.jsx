import { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem } from "@mui/material";
import { useContext } from "react";
import { PatientContext } from "../../shared/context/PatientContext";

export const FormPatient = () => {
  //OBTENEMOS LOS DATOS DEL CONTEXT DE PACIENTE
  const { formPatient, handleValueChange, handleInputBlur } = useContext(PatientContext);
  const [selectedSex, setSelectedSex] = useState(0);
  const [stateBirthdate, setStateBirthdate] = useState(null);


  const handleSexChange = (event, item) => {// Actualiza el estado con el valor seleccionado
    setSelectedSex(event.target.value);
    handleValueChange(formPatient.sex.field, item.props.children);
  };
  
  const handleBirthdateChange = (newValue) => {
    setStateBirthdate(newValue);
    handleValueChange(formPatient.birthdate.field, newValue);
    setStateBirthdate(null);
  }

  const options = [
    { value: 0, label: "Seleccionar" },
    { value: 1, label: "Masculino" },
    { value: 2, label: "Femenino" }
  ]

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3">
          <TextField
            id={formPatient.name.field}
            label={"Nombres del paciente"}
            value={formPatient.name.value}
            variant="outlined"
            onChange={(e) => handleValueChange(formPatient.name.field, e.target.value)}
            error={!formPatient.name.isValid}
            helperText={!formPatient.name.isValid ? "Los nombres son obligatorios" : null}
          />
          <TextField
            id={formPatient.lastName.field}
            label="Apellidos del paciente"
            value={formPatient.lastName.value}
            variant="outlined"
            onChange={(e) => handleValueChange(formPatient.lastName.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.lastName.field, e.target.value)}
            error={!formPatient.lastName.isValid}
            helperText={!formPatient.lastName.isValid ? "Los apellidos son obligatorios" : null}
          />

          <DatePicker
            format="DD/MM/YYYY"
            id={formPatient.birthdate.field}
            label="Fecha de nacimiento"
            value={formPatient.birthdate.value || stateBirthdate}
            defaultValue={stateBirthdate}
            onChange={(newValue) => handleBirthdateChange(newValue)}
            onBlur={(newValue) => handleInputBlur(formPatient.birthdate.field, newValue)}
            slotProps={{
              textField: {
                helperText: !formPatient.birthdate.isValid ? "La fecha de nacimiento es obligatoria" : null,
                error: !formPatient.birthdate.isValid
              }
            }}
          />

          <TextField
            id={formPatient.sex.field}
            label="Sexo"
            name="sex"
            defaultValue={formPatient.sex.value} // Valor por defecto
            defaultChecked={0} // Valor por defecto
            value={selectedSex} // Usa el estado como valor
            onChange={(e, item) => { handleSexChange(e, item) }} // Actualiza el estado con el valor seleccionado
            error={!formPatient.sex.isValid}
            helperText={!formPatient.sex.isValid ? "El sexo es obligatorio" : null}
            select
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id={formPatient.address.field}
            label="Direccion"
            value={formPatient.address.value}
            onChange={(e) => handleValueChange(formPatient.address.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.address.field, e.target.value)}
            error={!formPatient.address.isValid}
            helperText={!formPatient.address.isValid ? "La direccion es obligatoria" : null}
            variant="outlined"
          />

          <TextField
            id={formPatient.phone.field}
            label="Numero de telefono"
            value={formPatient.phone.value}
            onChange={(e) => handleValueChange(formPatient.phone.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.phone.field, e.target.value)}
            error={!formPatient.phone.isValid}
            helperText={!formPatient.phone.isValid ? "El numero de telefono es obligatorio" : null}
            variant="outlined"
          />

          <TextField
            id={formPatient.email.field}
            label="Correo electonico"
            value={formPatient.email.value}
            onChange={(e) => handleValueChange(formPatient.email.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.email.field, e.target.value)}
            error={!formPatient.email.isValid}
            helperText={!formPatient.email.isValid ? "El correo electronico es obligatorio" : null}
            variant="outlined"
          />
        </div>

    </LocalizationProvider>
  );
};

