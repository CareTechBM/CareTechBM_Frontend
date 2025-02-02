import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MySidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard Principal', route: '/' },
    { text: 'Tráfico Web', route: '/trafico-web' },
    { text: 'Productos', route: '/productos' },
    { text: 'Agregar Productos', route: '/agregar-productos' },
    { text: 'SEO', route: '/seo' },
    { text: 'Órdenes', route: '/ordenes' },
    { text: 'Socios', route: '/socios' },
    { text: 'Calendario', route: '/calendario' },
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white sidebar p-3 position-fixed h-100" style={{ width: '250px' }}>
        <h4 className="mb-4">Menú</h4>
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item mb-2">
              <span
                className="nav-link text-white fw-semibold"
                style={{ cursor: 'pointer' }}
                onClick={() => handleNavigate(item.route)}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido principal */}
      <Container className="p-4" style={{ marginLeft: '250px' }}>
        <h1>Contenido Principal</h1>
        <p>
          Bienvenido al panel de administración. Selecciona una opción del menú para navegar.
        </p>
      </Container>
    </div>
  );
};