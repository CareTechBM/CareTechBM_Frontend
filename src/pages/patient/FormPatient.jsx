import { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem } from "@mui/material";
import { useContext } from "react";
import { PatientContext } from "../../shared/context/PatientContext";
import dayjs from "dayjs";

export const FormPatient = () => {
  //OBTENEMOS LOS DATOS DEL CONTEXT DE PACIENTE
  const { formPatient, handleValueChange, handleInputBlur } = useContext(PatientContext);
  const [selectedSex, setSelectedSex] = useState(0);
  const [stateBirthdate, setStateBirthdate] = useState(dayjs('1990-01-01'));
  const [stateRegistration, setStateRegistration] = useState(dayjs('1990-01-01'));

  const handleSexChange = (event) => {// Actualiza el estado con el valor seleccionado
    setSelectedSex(event.target.value);
    formPatient.sex.value = event.target.value; // Actualiza el estado con el valor seleccionado
    handleValueChange(formPatient.sex.field, event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3">
          <TextField
            id={formPatient.name.field}
            label={"Nombres del paciente"}
            value={formPatient.name.value}
            variant="outlined"
            onChange={(e) => handleValueChange(formPatient.name.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.name.field, e.target.value)}
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
            onChange={(newValue) => {
              setStateBirthdate(newValue);
              handleValueChange(formPatient.birthdate.field, newValue);
            }}
            slotProps={{
              textField: {
                helperText: !formPatient.birthdate.isValid ? "La fecha de nacimiento es obligatoria" : null,
                error: !formPatient.birthdate.isValid
              }
            }}
          />

          <TextField
            id="select-sex"
            label="Sexo"
            value={formPatient.sex.value == '' ? selectedSex : formPatient.sex.value} // Usa el estado como valor
            onChange={handleSexChange} // Manejador de cambio
            onBlur={(e) => handleInputBlur(formPatient.sex.field, e.target.value)}
            select
            error={!formPatient.sex.isValid}
            helperText={!formPatient.sex.isValid ? "El sexo es obligatorio" : null}
          >
            <MenuItem value="0">Seleccionar</MenuItem>
            <MenuItem value="1">Masculino</MenuItem>
            <MenuItem value="2">Femenino</MenuItem>
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

          <DatePicker
            format="DD/MM/YYYY"
            id={formPatient.registrationDate.field}
            label="Fecha de registro"
            value={formPatient.registrationDate.value || stateRegistration}
            defaultValue={stateRegistration}
            onChange={(newValue) => {
              setStateRegistration(newValue);
              handleValueChange(formPatient.registrationDate.field, newValue);
            }}
            slotProps={{
              textField: {
                helperText: !formPatient.registrationDate.isValid ? "La fecha de registro es obligatoria" : null,
                error: !formPatient.registrationDate.isValid
              }
            }}
          />

          <TextField
            id={formPatient.record.field}
            label="Registro"
            value={formPatient.record.value}
            onChange={(e) => handleValueChange(formPatient.record.field, e.target.value)}
            onBlur={(e) => handleInputBlur(formPatient.record.field, e.target.value)}
            error={!formPatient.record.isValid}
            helperText={!formPatient.record.isValid ? "El registro es obligatorio" : null}
            type="number"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

