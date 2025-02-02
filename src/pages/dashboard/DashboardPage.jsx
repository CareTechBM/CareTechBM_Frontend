import React from "react";
import { MySidebar } from "../../components/sidebar/Sidebar.jsx";
export const DashboardPage = () => {
  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar fijo */}
      <MySidebar />
      
      {/* Contenido principal */}
      <div className="content-container flex-grow-1 p-4">
        <h1>Bienvenido al Dashboard</h1>
      </div>
    </div>
  );
};