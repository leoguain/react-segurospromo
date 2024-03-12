import React from "react";
import "./styles.css";
import { LinksMenu } from "./components/LinksMenu";
import { SAC } from "./components/SAC";
import { FooterAccordion } from "./components/FooterAccordion";
import { PaymentMethods } from "./components/PaymentMethods";
import { BottomBar } from "./components/BottomBar";

export const Footer = () => {
  return (
    <footer>
      <div className="Footer_Menus">
        {/* Componente de Links para as redes sociais */}
        <LinksMenu />
        {/* Componentes de atendimento ao usuário */}
        <SAC />
        {/* Componente Accordion de Seguros/Quem somos/Seguradoras/Blog */}
        <FooterAccordion />
        {/* Componente de  formas de pagamento */}
        <PaymentMethods />
      </div>
      {/* Componente de barra inferior da tela */}
      <BottomBar />
    </footer>
  );
};
