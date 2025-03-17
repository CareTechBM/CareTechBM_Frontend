import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2c3541",
    color: theme.palette.common.white,
    fontFamily: "'Montserrat', sans-serif", // Agregar aquí
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
    fontFamily: "'Montserrat', sans-serif", // Agregar aquí
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TablePatient = ({ patient, handleDelete, handleEdit }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Fecha de nacimiento</StyledTableCell>
            <StyledTableCell>Sexo</StyledTableCell>
            <StyledTableCell>Dirección</StyledTableCell>
            <StyledTableCell>Teléfono</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Acción</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell>{`${item.name} ${item.lastName}`}</StyledTableCell>
                <StyledTableCell>{item.birthdate}</StyledTableCell>
                <StyledTableCell>{item.sex}</StyledTableCell>
                <StyledTableCell>{item.address}</StyledTableCell>
                <StyledTableCell>{item.phone}</StyledTableCell>
                <StyledTableCell>{item.email}</StyledTableCell>
                <StyledTableCell>
                  <div className="flex gap-x-[12px]">
                    <button onClick={() => handleEdit(item._id)}>
                      <ModeEditIcon
                        fontSize="large"
                        style={{ fontSize: 35, color: "#2C3541" }}
                      />
                    </button>
                    <button onClick={() => handleDelete(item._id)}>
                      <DeleteIcon
                        fontSize="large"
                        style={{ fontSize: 35, color: "#2C3541" }}
                      />
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
