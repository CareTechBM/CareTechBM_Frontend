import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import CareTechLogo from "../../assets/TechCare.png";
import DoctorIcon from "../../assets/User Medical.png";

const NavButton = ({ imgSrc, element, text, onClickHandler, extraClass }) => {
  return (
    <div className={"sidebar-button " + extraClass} onClick={onClickHandler}>
      {imgSrc ? (
        <img src={imgSrc} alt={`${text} icon`} className="icon-image" />
      ) : (
        element
      )}
      <span>{text}</span>
    </div>
  );
};

export const MySidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout realizado");
  };

  const handleOpenModal = () => {
    navigate("/modal");
  };

  return (
    <div className="bg-[#E6ECED] min-h-screen flex flex-col w-[55%] min-w-[195px] max-w-[20%]">
      <div className=" filter:drop-shadow-xl sidebar-logo bg-[#2C3541] flex flex-col items-center justify-center">
        <img src={CareTechLogo} alt="Logo" className="w-2/6" />
        <h2 className="text-white">Care Tech</h2>
      </div>
      <div className="sidebar-buttons">
        <NavButton
          extraClass={"justify-right items-center flex-row gap-2"}
          element={
            <FontAwesomeIcon
              size="xl"
              icon={faHospitalUser}
              style={{ color: "#21a393" }}
            />
          }
          text="Pacientes"
          onClickHandler={() => navigate("/patient")}
        />
        <NavButton
          extraClass={"justify-right items-center flex-row gap-2"}
          element={
            <FontAwesomeIcon
              size="xl"
              icon={faSuitcaseMedical}
              style={{ color: "#21a393" }}
            />
          }
          text="Medicamentos"
          onClickHandler={() => navigate("/medication")}
        />
        <NavButton
          imgSrc={DoctorIcon}
          text="Doctores"
          onClickHandler={() => navigate("/doctor")}
        />
        <NavButton
          extraClass={"justify-right items-center flex-row gap-2"}
          element={
            <FontAwesomeIcon
              size="xl"
              icon={faPowerOff}
              style={{ color: "#21a393" }}
            />
          }
          text="Logout"
          onClickHandler={() => {}}
        />
      </div>
      <div className="sidebar-profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-details">
          <span>Emma Oliva</span>
          <span>em@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
