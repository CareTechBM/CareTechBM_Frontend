import ModalComponent from "./components/organisms/ModalComponent";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login/LoginPage";

const routes = [
  { path: '/*', element: <LoginPage /> },
  { path: '/principal', element: <DashboardPage /> },
  { path: '/patient', element: <DashboardPage menu={'patient'} /> },
  { path: '/doctor', element: <DashboardPage menu={'doctor'} /> },
  { path: '/medication', element: <DashboardPage menu={'medication'} /> },
  { path: "/modal", element: <ModalComponent /> },
]

export default routes;
