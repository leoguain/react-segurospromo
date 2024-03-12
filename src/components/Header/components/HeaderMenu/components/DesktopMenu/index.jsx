import React from "react";
import "./styles.css";
import { useMenuLinks } from "../../../../hooks/useMenuLinks"

export const DesktopMenu = () => {
  const { menuLinks } = useMenuLinks();

  return (
    <div className="DesktopMenu_Container">
      <div className="DesktopMenu_Items">
        {/* Carrega os items do menu, via hook useMenuLinks */}
        {menuLinks.map(({ id, title, href }) => (
          <a key={id} href={href}>{title}</a>
        ))}
      </div>
      {/* Botão de Área do Cliente */}
      <div className="DesktopMenu_ClientArea">
        <a href="/">
          <img src="/assets/icons/user.png" alt=""/>
          Área do cliente
          <img src="/assets/icons/arrow-right.png" alt=""/>
        </a>
      </div>
    </div>
  );
};