import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  bgcolor: "background.paper",
  border: "2px solid #2c3541",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  marginY: "2%",
  marginX: "10%",
};

export default function ModalComponent({titleForm,optionButton,textButtonModal,formView, handleActive,
   active, close, action, actionError }) {
  const [open, setOpen] = useState(false);

  // Abrir la modal
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <Button
        onClick={handleActive}
        sx={{
          backgroundColor: "#2C3541",
          color: "white",
        }}
      >
        {textButtonModal}
      </Button>
      <Modal
        keepMounted
        open={active}
        onClose={(event, reason) => {
          // Evita que la modal se cierre al hacer clic fuera o presionar Esc
          if (reason === "backdropClick" || reason === "escapeKeyDown") {
            return;
          }
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        disableEscapeKeyDown
      >
        <Box sx={style}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2.3rem",
              color: "#2C3541",
              fontFamily: "'Montserrat', sans-serif",
              textAlign: "center",
            }}
          >
            {titleForm}
          </Typography>
          <br />
            {/* AQUI PINTAMOS EL FORMULARIO */
              formView
            }
          <div className="mt-3 flex flex-row items-center justify-center gap-x-5">
            <Button
              onClick={close}
              sx={{
                backgroundColor: "#bc4143",
                color: "white",
                padding: "10px 20px",
                height: "100%",
                '&:hover': {
                  backgroundColor: "#bc4143",
                  boxShadow: "0px 0px 5px 0px #bc4143",
                  cursor: "pointer",
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={action}
              sx={{
                backgroundColor: "#2C3541",
                color: "white",
                padding: "10px 20px",
                height: "100%",
                "&:hover": {
                  backgroundColor: "#2C3541",
                  boxShadow: "0px 0px 5px 0px #2C3541",
                  cursor: "pointer",
                },
                "&:disabled": {
                  color: "white",
                  cursor: "grabbing",
                  opacity: "0.5",
                },
              }}
              disabled={actionError}
            >
              {optionButton}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
