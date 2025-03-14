import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MenuItem } from "@mui/material";
import dayjs from "dayjs";

const FormPatient = () => {
  const [selectedSex, setSelectedSex] = useState("0");

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value); // Actualiza el estado con el valor seleccionado
  };

  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="h-[30rem] w-[55rem]">
        <div className="grid grid-cols-2 gap-x-[1.1rem] gap-y-[2.2rem]">
          {/* Otros campos */}
          <TextField
            id="outlined-basic"
            label="Nombres del paciente"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Apellidos del paciente"
            variant="outlined"
          />

          {/* Campo de fecha con DatePicker */}
          <DatePicker
            label="Fecha de nacimiento"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />

          <TextField
            id="select-sex"
            label="Sexo"
            value={selectedSex} // Usa el estado como valor
            onChange={handleSexChange} // Manejador de cambio
            select
          >
            <MenuItem value="0">Seleccionar</MenuItem>
            <MenuItem value="10">Masculino</MenuItem>
            <MenuItem value="20">Femenino</MenuItem>
          </TextField>

          <TextField
            id="outlined-basic"
            label="Direccion "
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Numero de telefono"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Correo electonico"
            variant="outlined"
          />

          <DatePicker
            label="Fecha de Registro"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />

          <DatePicker
            label="Registro"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            id="outlined-basic"
            label="TextFieldTheErrors"
            variant="outlined"
          />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FormPatient;
