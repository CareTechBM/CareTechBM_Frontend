import { useEffect } from 'react';
import { useMedication } from '../../shared/hooks/useMedication';
import { TableMedication } from './TableMedication';

export const MedicationPage = () => {
    const { isLoading, getMedication, medication } = useMedication();

    const getMedications = async () => {
        await getMedication();
    }

    useEffect(() => {
        getMedications();
    }, []);

    return (
        <>
            <div className='bg-[#E6ECED] min-h-screen max-h-screen flex flex-col'>
                <div className='p-4 relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-900 antialiased 
                w-full mx-auto'>{
                        Array.isArray(medication) ? (
                            <TableMedication medication={medication} />
                        ) : (null)
                    }</div>
            </div>
        </>
    )
}

export default MedicationPage;