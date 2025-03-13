import { useEffect } from 'react';
import { usePatient } from '../../shared/hooks/usePatient';
import { HeaderTable } from '../../components/molecules/HeaderTable'
import { ColumnTable } from '../../components/molecules/ColumnTable'

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
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <HeaderTable headers={['Nombre', 'Fecha de nacimiento', 'Sexo', 'Dirección', 'Teléfono', 'Email','Accion']} />
              <tbody>
                {patient.map((item, index) => (
                  <tr key={index} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200' >
                    <ColumnTable dato={item.name +' '+item.lastName} />
                    <ColumnTable dato={item.birthdate} />
                    <ColumnTable dato={item.sex} />
                    <ColumnTable dato={item.address} />
                    <ColumnTable dato={item.phone} />
                    <ColumnTable dato={item.email} />
                    <td className="grid grid-cols-1 p-2 gap-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">Editar</button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (null)
        }</div>
      </div>  
    </>
  )
}

export default PatientPage;