import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

export const InputField = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
  placeholder,
  stylesInput,
  stylesLabel,
}) => {
  return (
    <div className="w-full">
      <Label htmlFor={field} text={label} styles={stylesLabel} />
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
      <span
        className={
          `italic font-semibold text-lg ` +
          (showErrorMessage ? "text-red-500" : null)
        }
      >
        {" "}
        {showErrorMessage && validationMessage}
      </span>
    </div>
  );
};

export const AlertShowError = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
  placeholder,
  stylesInput,
  stylesLabel,
}) => {
  return (
    <div className="">
      {/*<Label htmlFor={field} text={label}  styles={stylesLabel}/>
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
            />*/}
      <span className={`` + (showErrorMessage ? "text-red-500" : null)}>
        {showErrorMessage && validationMessage}
      </span>
    </div>
  );
};

/*<div className="grid place-items-center h-svh bg-[#2c3541]">
            <div className="place-items-center place-content-center">
                <div className="flex flex-col items-center gap-3 p-2 text-center">
                    <h1 className="font-bold text-white">BIENVENIDO A CARETECH</h1>
                    <img src="/src/assets/TechCare.png" className="w-1/6 figure-img" alt="Logo de CareTech" />
                </div>
                <form className="flex flex-col gap-3 w-2/3">
                    <InputField
                        field={formState.email.field}
                        label={"Email"}
                        value={formState.email.value}
                        onChangeHandler={handleInputChange}
                        placeholder={"Email"}
                        type="email"
                        showErrorMessage={formState.email.showError}
                        validationMessage={validateEmailMessage}
                        onBlurHandler={handleInputBlur}
                        stylesLabel={'text-white'}
                    />
                    <InputField
                        field={formState.password.field}
                        label={"Password"}
                        value={formState.password.value}
                        onChangeHandler={handleInputChange}
                        placeholder={"Pasword"}
                        type="password"
                        showErrorMessage={formState.password.showError}
                        validationMessage={validateTextMessage}
                        onBlurHandler={handleInputBlur}
                        stylesLabel={'text-white'}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        disabled={btnDisabled} onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div> */
