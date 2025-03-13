import { useEffect } from 'react';
import { usePatient } from '../../shared/hooks/usePatient';
import { TablePatient } from './TablePatient';

export const PatientPage = () => {
  const { isLoading, getPatient, patient } = usePatient();

  const getPatients = async () => {
    await getPatient();
  }

  useEffect(() => {
    getPatients();
  }, []);



  return (
    <>
      <div className='bg-[#E6ECED] min-h-screen max-h-screen flex flex-col'>
        <div className='p-4 relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-900 antialiased 
        w-full mx-auto'>{
          Array.isArray(patient) ? (
            <TablePatient patient={patient} />
          ) : (null)
        }</div>
      </div>  
    </>
  )
}

export default PatientPage;