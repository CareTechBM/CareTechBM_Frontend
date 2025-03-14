import { useDoctor } from "../../shared/hooks/useDoctor";
import { useEffect } from "react";
import { TableDoctor } from "./TableDoctor";

export const DoctorPage = () => {
  const { createDoctor, getDoctor, doctor, isLoading } = useDoctor();

  const getDoctors = async () => {
    await getDoctor();
  }

  useEffect(() => {
    getDoctors();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    getDoctors();
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    getDoctors();
  }

  return (
    <>
      <div className='bg-[#E6ECED] min-h-screen max-h-screen flex flex-col'>
        <div className='p-2 relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-900 antialiased 
              w-full mx-auto'>{
            Array.isArray(doctor) ? (
              <TableDoctor doctor={doctor} handleDelete={handleDelete} handleEdit={handleEdit} />
            ) : (null)
          }</div>
      </div>
    </>
  )
}
