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
    <div className="flex flex-row  h-full min-h-full">
      {/* Sidebar fijo */}
      <MySidebar/>

      {/* Contenido principal */}
      <div className="w-full overflow-y-auto">{viewMenu()}</div>
    </div>
  );
};
