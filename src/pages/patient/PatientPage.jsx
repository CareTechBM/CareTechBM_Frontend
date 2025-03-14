import { useEffect } from "react";
import { usePatient } from "../../shared/hooks/usePatient";
import { TablePatient } from "./TablePatient";
import { Typography } from "@mui/material";
import ModalComponent from "../../components/organisms/ModalComponent";

export const PatientPage = () => {
  const {
    isLoading,
    createPatient,
    getPatient,
    updatePatient,
    deletePatient,
    patient,
  } = usePatient();

  const getPatients = async () => {
    await getPatient();
  };

  useEffect(() => {
    getPatients();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    getPatients();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    getPatients();
  };

  return (
    <>
      <div className="min-h-screen max-h-screen flex flex-col bg-white">
        <div className="relative overflow-x-auto w-[auto]">
          <div className="flex mx-[2rem] mt-[3%] gap-x-[2%]">
            <Typography
              variant="h1"
              sx={{
                fontSize: "4.5rem",
                color: "#21A393",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Pacientes
            </Typography>
            <div className="mt-[2rem]">
              <ModalComponent />
            </div>
          </div>

          <div className="w-[auto] mt-[2%] mx-[2rem]">
            {Array.isArray(patient) ? (
              <TablePatient
                patient={patient}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPage;
