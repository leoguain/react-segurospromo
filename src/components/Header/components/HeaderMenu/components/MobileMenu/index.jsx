import React, {useState, useRef, useEffect} from "react";
import "./styles.css";
import { useMenuLinks } from "../../../../hooks/useMenuLinks"

export const MobileMenu = () => {
  const { menuLinks } = useMenuLinks();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close accordion if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="MobileMenu_Container"
      ref={mobileMenuRef}
    >
      {/* Trigger do Menu Mobile */}
      <div 
        className="MobileMenu_Button" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu 
        <img src={`/assets/icons/${menuOpen ? 
                      "close" : 
                      "burger"
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