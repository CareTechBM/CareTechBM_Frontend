export const Input = ({
    field,
    value,
    placeholder,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
    styles
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event ) => {
        onBlurHandler(event.target.value, field)
    }

  return (
    <>
        {textarea ? (
            <textarea
                type={type}
                id={field}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                onBlur={handleInputBlur}
                rows={5}
                style={{maxWidth: '400px'}}
                className={"input-group-textjustify-items-start bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "+styles}
            />
        ) : (
            <input
                id={field}
                type={type}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                onBlur={handleInputBlur}
                className={"input-group-textjustify-items-start bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "+styles}
            />
        )} 
    </>
  )
}


