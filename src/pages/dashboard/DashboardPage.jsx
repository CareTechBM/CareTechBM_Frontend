import { MySidebar } from "../../components/organisms/Sidebar";
import { PatientPage } from "../patient/PatientPage";

export const DashboardPage = ({ menu }) => {
  const viewMenu = () => {
    switch (menu) {
      case "patient":
        return <PatientPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row">
      {/* Sidebar fijo */}
      <MySidebar />

      {/* Contenido principal */}
      <div className="flex-grow-1 h-full">{viewMenu()}</div>
    </div>
  );
};
