import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const MyNavbar = () => {
  const navigate = useNavigate();

  const handleNavigateToProductosPage = () => {
    navigate('/productos');
  };

  const handleNavigateToAddProductoPage = () => {
    navigate('/agregarProducto');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>TechnicalTest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleNavigateToProductosPage}>Productos</Nav.Link>
            <Nav.Link onClick={handleNavigateToAddProductoPage}>Agregar Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};