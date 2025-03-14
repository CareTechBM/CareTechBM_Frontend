import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import DoctorIcon from "../../assets/User Medical.png";


const NavButton = ({ imgSrc, element, text, onClickHandler, extraClass }) => {
  return (
    <div className={"sidebar-button " + extraClass} onClick={onClickHandler}>
      {imgSrc ? <img  src={imgSrc} alt={`${text} icon`} className="icon-image" /> : element}
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
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h2>Mi App</h2>
      </div>
      <div className="sidebar-buttons">
        <NavButton
          extraClass={'justify-right items-center flex-row gap-2'}
          element={<FontAwesomeIcon size="xl" icon={faHospitalUser} style={{ color: "#21a393", }} />}
          text="Pacientes"
          onClickHandler={() => navigate("/patient")}
        />
        <NavButton
          extraClass={'justify-ritght items-center flex-row gap-2'}
          element={<FontAwesomeIcon size="xl" icon={faSuitcaseMedical} style={{ color: "#21a393", }} />}
          text="Medicamentos"
          onClickHandler={() => navigate("/medicament")}
        />
        <NavButton
          imgSrc={DoctorIcon}
          text="Doctores"
          onClickHandler={() => navigate("/doctor")}
        />
        <NavButton
          imgSrc="/assets/icons/settings.png"
          text="My Account"
          onClickHandler={() => { }}
        />
        <NavButton
          imgSrc="/assets/icons/logout.png"
          text="Logout"
          onClickHandler={handleLogout}
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
