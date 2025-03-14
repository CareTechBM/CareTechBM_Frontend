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
    getPatients();
  }

  const handleEdit = async (e) => {
    e.preventDefault();

    getPatients();
  }


  return (
    <>
      <div className='bg-[#21A393] min-h-screen max-h-screen flex flex-col'>
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