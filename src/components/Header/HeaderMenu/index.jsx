import React from "react";
import "./styles.css";
import { useMenuLinks } from "../hooks/useMenuLinks"

export const HeaderMenu = () => {
  const { menuLinks } = useMenuLinks();

  return (
    <div className="HeaderMenu_Container">
      <a href="/">
        <img src="/assets/segurospromo/logo-white.png" alt="Logo Seguros promo" />
      </a>

      <div className="DesktopMenu">
        <div className="MenuItems">
          {menuLinks.map(({ id, title, href }) => (
            <a key={id} href={href}>{title}</a>
          ))}
        </div>
        <div className="ClientArea_Button">
          <a href="/">
            <img src="/assets/icons/user.png" alt=""/>
            Área do cliente
            <img src="/assets/icons/arrow-right.png" alt=""/>
          </a>
        </div>
      </div>

     
    </div>
  );
};

/*
 <div className="MobileMenu">
          Menu 
          <img src="/assets/icons/caret-down.png" alt=""/>
      </div>
      */