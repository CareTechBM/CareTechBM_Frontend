import { useEffect } from "react";
import { usePatient } from "../../shared/hooks/usePatient";
import { TablePatient } from "./TablePatient";
import { Typography } from "@mui/material";
import ModalComponent from "../../components/organisms/ModalComponent";
import { useState } from "react";
import { TablePaginationComponent } from "../../components/organisms/PaginationComponent";

export const PatientPage = () => {
  const {
    isLoading,
    createPatient,
    getPatient,
    updatePatient,
    deletePatient,
    patient,
  } = usePatient();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);

  const getPatients = async () => {
    const response = await getPatient({ page , pageSize });
    setPageSize(response.pageSize);
    setTotalPages(response.totalPages);
    setTotalPatients(response.totalPatients);
  };

  useEffect(() => {
    getPatients();
  }, [pageSize , page]);

  const handleDelete = async (e) => {
    e.preventDefault();
    getPatients();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    getPatients();
  };

  const handleChangePage =async (e, newPage) => {
    e.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (e) => {
    e.preventDefault();
    setPageSize(e.target.value, page);
    setPage(0);
  };


  return (
    <>
      <div className="flex flex-col bg-white h-full">
        <div className="overflow-x-auto m-2">
          <div className="flex flex-col gap-2 items-right md:items-center md:flex-row md:gap-[2rem] m-2">
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
            <div className="">
              <ModalComponent />
            </div>
          </div>
          <div className="flex flex-col items-start max-h-screen">
            {Array.isArray(patient) ? (
              <TablePatient
                patient={patient}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ) : null}
          </div>
          <div className="flex flex-col items-start">
            {Array.isArray(patient) && totalPages > 0 && (<TablePaginationComponent
              count={totalPatients}
              page={page} 
              rowsPerPage={pageSize}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPage;
