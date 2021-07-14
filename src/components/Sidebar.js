import React from "react";
import { slide as Menu } from "react-burger-menu";

export default slide => {
  return (
    <Menu {...slide} right width={ '50%'}>
        <a className="menu-item" href="#about">
            Accueil
        </a>

        <a className="menu-item" href="#projects">
            Anciens projets
        </a>

        <a className="menu-item" href="#skills">
            Compétences
        </a>

        <a className="menu-item" href="#testimonials">
            Recommendations
        </a>

        <a className="menu-item" href="#contact">
            Me contacter
        </a>
    </Menu>
  );
};