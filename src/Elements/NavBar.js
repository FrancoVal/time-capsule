import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default function props() {
  return (
    <Menu>
      <Link to="/homePage" className="menu-item">
        Página principal
      </Link>
      <Link to="/create" className="menu-item">
        Crear usuarios
      </Link>
      <Link to="/search" className="menu-item">
        Buscar usuarios
      </Link>
      <Link to="/update" className="menu-item">
        Actualizar usuarios
      </Link>
    </Menu>
  );
};