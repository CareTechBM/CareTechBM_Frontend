
export const HeaderTable = ({ headers }) => {
    return (
        <>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                <tr>
                    {Array.isArray(headers) && headers.map((header, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    )
}
