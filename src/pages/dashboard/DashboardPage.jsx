import { MySidebar } from "../../components/organisms/Sidebar";
import { PatientPage } from "../patient/PatientPage";
import { DoctorPage } from "../doctor/DoctorPage";
import { MedicationPage } from "../medication/MedicationPage";
import { ModalProvider } from "../../shared/context/ModalContext";
import { PatientProvider } from "../../shared/context/PatientContext";

export const DashboardPage = ({ menu }) => {
  const viewMenu = () => {
    switch (menu) {
      case "patient":
        return <PatientProvider><PatientPage /></PatientProvider>;
      case "doctor":
        return <DoctorPage />;
      case "medication":
        return <MedicationPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row h-screen max-h-screen min-h-full">
      <ModalProvider >
        {/* Sidebar fijo */}
        <MySidebar />

        {/* Contenido principal */}
        <div className="w-full overflow-y-auto">

          {viewMenu() || (
            <div className="flex justify-center items-center">
              <div className="">
                <img
                  className="w-screen h-screen object-cover opacity-60"
                  src="https://images.pexels.com/photos/8770713/pexels-photo-8770713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Imagen"
                />
              </div>
            </div>
          )}
        </div>
      </ModalProvider>
    </div>
  );
};
