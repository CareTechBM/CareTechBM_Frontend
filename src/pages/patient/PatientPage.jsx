import { usePatient } from "../../shared/hooks/usePatient";
import { TablePatient } from "./TablePatient";
import {useContext, useEffect} from "react";
import ModalComponent from "../../components/organisms/ModalComponent";
import { useState } from "react";
import { TablePaginationComponent } from "../../components/organisms/PaginationComponent";
import { PatientContext } from "../../shared/context/PatientContext";
import { FormPatient } from './FormPatient'
import {ModalContext} from "../../shared/context/ModalContext";
import dayjs from "dayjs";
import toast from "react-hot-toast";

export const PatientPage = () => {
  const {
    isLoading,
    createPatient,
    findPatientById,
    getPatient,
    updatePatient,
    deletePatient,
    patient,
  } = usePatient();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const { active, handleActive, handleClose} = useContext(ModalContext);
  const {formPatient, resetForm,errorForm,edit, setEdit,idPatient,setIdPatient} = useContext(PatientContext);

  const getPatients = async () => {
    const response = await getPatient({ page: page+1, pageSize });
    setPageSize(response.pageSize);
    setTotalPages(response.totalPages);
    setTotalPatients(response.totalPatients);
  };

  useEffect(() => {
    getPatients();
  }, [pageSize, page]);

  const handleDelete = async (id) => {
    await deletePatient(id);
    if(!isLoading) await getPatients();
  };

  const handleEdit =async (id) => {
    const response =await findPatientById(id);
    formPatient.name.value = response.name;
    formPatient.lastName.value = response.lastName;
    formPatient.birthdate.value = dayjs(response.birthdate);
    formPatient.sex.value = response.sex;
    formPatient.address.value = response.address;
    formPatient.phone.value = response.phone;
    formPatient.email.value = response.email;
    setIdPatient(response._id);
    setEdit(true);
    handleActive();
  };


  const closeForm = (e) => {
    resetForm();
    handleClose();
  }

  const savePatient = async (e) => {
    e.preventDefault();
    if(!edit){
      await createPatient(
        formPatient.name.value,
        formPatient.lastName.value,
        dayjs(formPatient.birthdate.value).format("YYYY-MM-DD"),
        formPatient.sex.value,
        formPatient.address.value,
        formPatient.phone.value,
        formPatient.email.value,
      );
      resetForm();
      handleClose();
      getPatients();
    }else{
      await updatePatient(
        idPatient,
        formPatient.name.value,
        formPatient.lastName.value,
        dayjs(formPatient.birthdate.value).format("YYYY-MM-DD"),
        formPatient.sex.value,
        formPatient.address.value,
        formPatient.phone.value,
        formPatient.email.value
      );
      resetForm();
      handleClose();
      getPatients();
      setEdit(false);
    }
  };
  
  return (
    <>
      <div className="flex flex-col bg-white h-screen max-h-full overflow-x-auto">
          <div className="flex flex-col gap-2 items-right md:items-center md:flex-row md:gap-[2rem] m-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#21A393]">Pacientes</h1>
            <ModalComponent titleForm={edit?"Editar Paciente":"Agregar Paciente"} optionButton={edit?"ACTUALIZAR":"GUARDAR"} textButtonModal={edit?"Editar Paciente":"Agregar Paciente"}
            formView={<FormPatient /> } handleActive={handleActive} active={active} close={closeForm} action={savePatient}
              actionError={errorForm}/>
          </div>
          <div className="m-2 overflow-y-auto">
            {Array.isArray(patient) ? (
              <TablePatient
                patient={patient}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ) : null}
          </div>
          {Array.isArray(patient) && totalPages > 0 && (<TablePaginationComponent
            count={totalPatients}
            page={page}
            rowsPerPage={pageSize}
            onPageChange={(e, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => setPageSize(e.target.value, 10)}
          />)
          }
      </div>
    </>
  );
};

export default PatientPage;
