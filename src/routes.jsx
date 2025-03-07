import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login/LoginPage";

const routes = [
    {path: '/*', element: <LoginPage/>},
    {path: '/principal', element: <DashboardPage/>},
]

export default routes