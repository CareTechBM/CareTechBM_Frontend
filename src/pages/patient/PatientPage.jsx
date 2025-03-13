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
        <div>{
          Array.isArray(patient) ? (
            <table className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <HeaderTable headers={['Nombre completo', 'Fecha de nacimiento', 'Sexo', 'Dirección', 'Teléfono', 'Email','Accion']} />
              <tbody>
                {patient.map((item, index) => (
                  <tr key={index}>
                    <ColumnTable dato={item.name +' '+item.lastName} />
                    <ColumnTable dato={item.birthdate} />
                    <ColumnTable dato={item.sex} />
                    <ColumnTable dato={item.address} />
                    <ColumnTable dato={item.phone} />
                    <ColumnTable dato={item.email} />
                    <ColumnTable dato={'editar'} />
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (<div>no hay</div>)
        }</div>
      </div>
    </>
  )
}

export default PatientPage;