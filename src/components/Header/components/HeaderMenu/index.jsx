import React, {useContext} from "react";
import "./styles.css";
import ScreenWidthContext from '../../../../context/ScreenWidthContext';
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";

export const HeaderMenu = () => {
  //constante que verifica se a tela é maior ou menor do que a resolução de 1024px de largura
  const mobileScreen = useContext(ScreenWidthContext) >= 1024 ? false : true;

  return (
    <nav className="HeaderMenu_Container">
      <a href="/">
        <img 
          className="Logo_Segurospromo" 
          src="/assets/segurospromo/logo-white.png" 
          alt="Logo Segurospromo" />
      </a>
      {/* A const mobileScreen define se é exibido o 
       Menu Mobile ou o Menu Desktop, baseado na 
       resolução da tela do usuário */}
      {mobileScreen ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
};