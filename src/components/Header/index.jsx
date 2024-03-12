import React from "react";
import "./styles.css";
import { Topbar } from "./components/Topbar";
import { HeaderMenu } from "./components/HeaderMenu";

export const Header = () => {
  return (
    <header className="Header_Container">
      {/* Barra Superior - Contatos */}
      <Topbar />
      {/* Menu do site */}
      <HeaderMenu />
    </header>
  );
};
