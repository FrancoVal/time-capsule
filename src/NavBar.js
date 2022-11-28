import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default function props() {
  return (
    <Menu>
      <Link to="/homePage" className="menu-item">
        Página principal
      </Link>
      <Link to="/b" className="menu-item">
        Comentarios para vos
      </Link>
    </Menu>
  );
};