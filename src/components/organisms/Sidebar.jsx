import { useNavigate } from "react-router-dom";

const NavButton = ({ imgSrc, text, onClickHandler }) => {
  return (
    <div className="sidebar-button" onClick={onClickHandler}>
      <img src={imgSrc} alt={`${text} icon`} className="icon-image" />
      <span>{text}</span>
    </div>
  );
};

export const MySidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h2>Mi App</h2>
      </div>
      <div className="sidebar-buttons">
        <NavButton
          imgSrc="/assets/icons/dashboard.png"
          text="Pacientes"
          onClickHandler={() => navigate('/patient')}
        />
        <NavButton
          imgSrc="/assets/icons/publicaciones.png"
          text="Medicamentos"
          onClickHandler={() => navigate('/medication')}
        />
      </div>
      <div className="sidebar-profile">
        <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <span>Emma Oliva</span>
          <span>em@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
