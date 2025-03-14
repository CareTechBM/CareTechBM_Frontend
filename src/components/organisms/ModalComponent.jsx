import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import FormPatient from "../forms/FormPatient";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false);

  // Abrir la modal
  const handleOpen = () => setOpen(true);

  // Cerrar la modal
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "#2C3541",
          color: "white",
        }}
      >
        Agregar Paciente
      </Button>

      <Modal
        keepMounted
        open={open}
        onClose={(event, reason) => {
          // Evita que la modal se cierre al hacer clic fuera o presionar Esc
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            return;
          }
          handleClose();
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        disableEscapeKeyDown
      >
        <Box sx={style}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.5rem",
              color: "#2c3541",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Datos de nuevo paciente
          </Typography>
          <br />

          <FormPatient />

          <div className="w-[100%]">
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "#bc4143",
                color: "white",
              }}
            >
              Cancelar
            </Button>{" "}
            <Button
              onClick={""}
              sx={{
                backgroundColor: "#2C3541",
                color: "white",
                ml: "35rem",
              }}
            >
              Agregar nuevo paciente
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
