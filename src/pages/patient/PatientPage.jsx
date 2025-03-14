import { useEffect } from 'react';
import { usePatient } from '../../shared/hooks/usePatient';
import { TablePatient } from './TablePatient';

export const PatientPage = () => {
  const { isLoading, createPatient, getPatient, updatePatient, deletePatient, patient } = usePatient();

  const getPatients = async () => {
    await getPatient();
  }

  useEffect(() => {
    getPatients();
    
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    /*await deletePatient(e.target.id);*/
    getPatients();
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    /*await updatePatient(e.target.id, 'Tilin','Insano','2005-10-10', 'Femenino', 'Av. 1', '12345678','hola@gmail.com');*/
    /*await createPatient('Keny','Admin','2005-10-10', 'Macho', 'Av. 5', '12345678','keny@gmail.com');*/
    getPatients();
  }


  return (
    <>
      <div className='bg-[#E6ECED] min-h-screen max-h-screen flex flex-col'>
        <div className='p-2 relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-900 antialiased 
        w-full mx-auto'>{
          Array.isArray(patient) ? (
            <TablePatient patient={patient} handleDelete={handleDelete} handleEdit={handleEdit}/>
          ) : (null)
        }</div>
      </div>  
    </>
  )
}

export default PatientPage;