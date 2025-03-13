import { HeaderTable } from '../molecules/HeaderTable'
import { RowTable } from '../molecules/ColumnTable'

export const Table = ({ headers, data }) => {
    return (
        <>
            <table>
                <HeaderTable headers={headers} />
                <tbody>
                    { Array.isArray(data)? data.map((item, index) => (
                        <RowTable key={data.id} dato={item}/>
                    )):(<div>no hay</div>)}
                </tbody>
            </table>
        </>
    )
}
