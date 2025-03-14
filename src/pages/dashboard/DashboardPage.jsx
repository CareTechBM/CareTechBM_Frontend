import { MySidebar } from "../../components/organisms/Sidebar";
import { PatientPage } from "../patient/PatientPage";
import { DoctorPage } from "../doctor/DoctorPage";
import {MedicationPage} from "../medication/MedicationPage";

export const DashboardPage = ({ menu }) => {
  const viewMenu = () => {
    switch (menu) {
      case "patient":
        return <PatientPage />;
      case 'doctor':
        return <DoctorPage />;
      case 'medication':
        return <MedicationPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row">
      {/* Sidebar fijo */}
      <MySidebar/>

      {/* Contenido principal */}
      <div className="flex-grow-1 h-full">{viewMenu()}</div>
    </div>
  );
};
