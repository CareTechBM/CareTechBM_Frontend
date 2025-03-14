import ModalComponent from "./components/organisms/ModalComponent";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login/LoginPage";
import RegisterPage from "./pages/patient/PatientPage";

const routes = [
  { path: "/*", element: <LoginPage /> },
  { path: "/principal", element: <DashboardPage /> },
  { path: "/patient", element: <DashboardPage menu={"patient"} /> },
  { path: "/modal", element: <ModalComponent /> },
];

export default routes;
