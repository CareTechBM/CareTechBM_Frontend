import { HeaderTable } from '../../components/molecules/HeaderTable'
import { ColumnTable } from '../../components/molecules/ColumnTable'

export const TableDoctor = ({ doctor, handleDelete, handleEdit }) => {
    return (
        <>
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <HeaderTable headers={['Nombre', 'Especialidad', 'No. Colegiado', 'Telefono', 'Email', 'Accion']} />
                <tbody>
                    {doctor.map((item, index) => (
                        <tr key={index} className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200' >
                            <ColumnTable dato={item.name + ' ' + item.lastName} />
                            <ColumnTable dato={item.specialty} />
                            <ColumnTable dato={item.sex} />
                            <ColumnTable dato={item.collegiate} />
                            <ColumnTable dato={item.phone} />
                            <ColumnTable dato={item.email} />
                            <td className="grid grid-cols-1 p-2 gap-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" onClick={handleEdit} id={item._id}>Editar</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded" onClick={handleDelete} id={item._id}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
