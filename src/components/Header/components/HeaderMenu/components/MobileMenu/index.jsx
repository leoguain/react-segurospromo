import React, {useState} from "react";
import "./styles.css";
import { useMenuLinks } from "../../../../hooks/useMenuLinks"

export const MobileMenu = () => {
  const { menuLinks } = useMenuLinks();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      className="MobileMenu_Container"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {/* Trigger do Menu Mobile */}
      <div className="MobileMenu_Button">
        Menu 
        <img src={`/assets/icons/${menuOpen ? 
                      "caret-up" : 
                      "caret-down"
                    }.png`} alt=""/>
      </div>
        {/* Container dos Links do Menu Mobile */}
        <div className={`MobileMenu_Content ${menuOpen ? "ShowMenu" : ""}`}>
          {/* Carrega os items do menu, via hook useMenuLinks */}
          {menuLinks.map(({ id, title, href }) => (
            <a key={id} href={href}>{title}</a>
          ))}
          {/* Botão de Área do Cliente */}
          <div className="MobileMenu_ClientArea">
            <a href="/">
              <img src="/assets/icons/user.png" alt=""/>
              Área do cliente
            </a>
          </div>
        </div>
    </div>
  );
};