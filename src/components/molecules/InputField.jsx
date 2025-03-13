import { Label } from "../atoms/Label"
import { Input } from "../atoms/Input"

export const InputField = ({ field, label, value, onChangeHandler, type, showErrorMessage, validationMessage,
    onBlurHandler, textarea, placeholder, stylesInput, stylesLabel }) => {
    return (
        <div className="w-full">
            <Label htmlFor={field} text={label}  styles={stylesLabel}/>
            <Input
                field={field}
                name={field}
                value={value}
                onChangeHandler={onChangeHandler}
                type={type}
                placeholder={placeholder}
                showErrorMessage={showErrorMessage}
                validationMessage={validationMessage}
                onBlurHandler={onBlurHandler}
                textarea={textarea}
                styles={stylesInput}
            />
             <span className={`italic font-semibold text-lg `+ (showErrorMessage ? "text-red-500" : null)}> {showErrorMessage && validationMessage}</span>
        </div>
    )
}
