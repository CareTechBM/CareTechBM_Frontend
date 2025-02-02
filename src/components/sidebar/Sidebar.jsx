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

  const handleNavigateToSettingsPage = () => {
    navigate('/settings');
  };

  const handleNavigateToPublicacionesPage = () => {
    navigate('/publicaciones');
  };

  const handleNavigateToAddPublicacionPage = () => {
    navigate('/addpublicacion');
  };

  const handleLogout = () => {
    alert("Logout realizado");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h2>Mi App</h2>
      </div>
      <div className="sidebar-buttons">
        <NavButton
          imgSrc="/assets/icons/dashboard.png"
          text="Dashboard"
          onClickHandler={() => navigate('/')}
        />
        <NavButton
          imgSrc="/assets/icons/publicaciones.png"
          text="Publicaciones"
          onClickHandler={handleNavigateToPublicacionesPage}
        />
        <NavButton
          imgSrc="/assets/icons/add.png"
          text="Agregar Publicación"
          onClickHandler={handleNavigateToAddPublicacionPage}
        />
        <NavButton
          imgSrc="/assets/icons/settings.png"
          text="My Account"
          onClickHandler={handleNavigateToSettingsPage}
        />
        <NavButton
          imgSrc="/assets/icons/logout.png"
          text="Logout"
          onClickHandler={handleLogout}
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
