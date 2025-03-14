import { InputField } from "../../components/molecules/InputField";
import { AlertShowError } from "../../components/molecules/InputField";
import { useState } from "react";
import {
  validateEmail,
  validateEmailMessage,
  validateText,
  validateTextMessage,
} from "../../shared/validators/";
import { useLogin } from "../../shared/hooks/useLogin";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export const LoginPage = () => {
  const [formState, setFormState] = useState({
    email: {
      name: "email",
      field: "email",
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      name: "password",
      field: "password",
      value: "",
      isValid: false,
      showError: false,
    },
  });
  const { login, isLoading } = useLogin();

  const cleanForm = () => {
    setFormState({
      email: {
        name: "email",
        field: "email",
        value: "",
        isValid: false,
        showError: false,
      },
      password: {
        name: "password",
        field: "password",
        value: "",
        isValid: false,
        showError: false,
      },
    });
  };

  const handleInputChange = (value, field) => {
    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
      },
    }));
    handleInputBlur(value, field);
  };

  const handleInputBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validateText(value);
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(formState.email.value, formState.password.value);
    cleanForm();
  };

  const btnDisabled =
    isLoading || !formState.email.isValid || !formState.password.isValid;

  return (
    <>
      <div className="min-h-screen ">
        <div className="h-screen md:flex">
          <div className="w-1/2 h-full bg-black {flex} justify-center items-center hidden md:flex">
            <img
              className="w-full h-full object-cover opacity-60"
              src="https://images.pexels.com/photos/12955896/pexels-photo-12955896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Imagen"
            />
          </div>

          <div className="w-auto md:w-1/2 h-full bg-[#2C3541] flex justify-center items-center">
            <div className="md:w-[45rem] w-[auto] mb-[5rem]">
              <div className="md:mx-[38%] mx-[20%] w-[auto] h-[auto] mb-5">
                <img
                  src="../../../public/TechCare.png"
                  alt="Logo"
                  style={{ width: 170, height: 190 }}
                />
              </div>

              <div className="h-auto w-auto md:ml-[30%] ml-[5%]">
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                  }}
                >
                  Iniciar Sesion
                </Typography>
              </div>

              <form className="md:w-[28rem] w-[20rem] mx-[auto]">
                <div className="flex flex-col gap-y-[2.2rem]">
                  <TextField
                    fullWidth
                    label="Email"
                    id="email"
                    value={formState.email.value}
                    onChange={(e) => handleInputChange(e.target.value, "email")}
                    onBlur={(e) => handleInputBlur(e.target.value, "email")}
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                      "& label.Mui-focused": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white" },
                        "&:hover fieldset": { borderColor: "gray" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                  {formState.email.showError && (
                    <AlertShowError
                      showErrorMessage={formState.email.showError}
                      validationMessage={validateEmailMessage}
                    />
                  )}
                  <TextField
                    fullWidth
                    label="Contraseña"
                    id="password"
                    type="password"
                    value={formState.password.value}
                    onChange={(e) =>
                      handleInputChange(e.target.value, "password")
                    }
                    onBlur={(e) => handleInputBlur(e.target.value, "password")}
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                      "& label.Mui-focused": { color: "white" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white" },
                        "&:hover fieldset": { borderColor: "gray" },
                        "&.Mui-focused fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                  {formState.password.showError && (
                    <AlertShowError
                      showErrorMessage={formState.password.showError}
                      validationMessage={validateTextMessage}
                    />
                  )}

                  <Button
                    onClick={handleLogin}
                    disabled={btnDisabled}
                    variant="contained"
                    disableElevation
                    type="submit"
                    sx={{
                      width: "100%",
                      backgroundColor: "#FFFFFF",
                      color: "#2C3541",
                    }}
                  >
                    INICIAR SESIÓN
                  </Button>

                  <div className="flex">
                    <Link
                      to="/getDefault"
                      variant="body"
                      sx={{ color: "white" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
