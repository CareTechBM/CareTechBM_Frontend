import { MySidebar } from "../../components/organisms/Sidebar";
import MedicationPage from "../medication/MedicationPage";

export const DashboardPage = () => {
  
  const viewMenu = () => {
    switch (menu) {
      case 'medication':
        return <MedicationPage />;
      default:
        return null;
    }
  }
  
  return (
    <div className="flex flex-row">
      {/* Sidebar fijo */}
      <MySidebar />

      {/* Contenido principal */}
      <div className="flex-grow-1 h-full">
        {viewMenu()}
      </div>
    </div>
  );
};