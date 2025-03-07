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
                className="input-group-text w-full justify-items-start"
            />
        ) : (
            <input
                id={field}
                type={type}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                onBlur={handleInputBlur}
                className="input-group-text w-full justify-items-start"
            />
        )} 
    </>
  )
}


