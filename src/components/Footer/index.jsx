import React from "react";
import "./styles.css";
import { LinksMenu } from "./components/LinksMenu";
import { SAC } from "./components/SAC";
import { FooterAccordion } from "./components/FooterAccordion";
import { PaymentMethods } from "./components/PaymentMethods";

export const Footer = () => {
  return (
    <footer>
      <div className="Footer_Menus">
        <LinksMenu />
        <SAC />
        <FooterAccordion />
        <PaymentMethods />
      </div>
      <div className="BottomBar">
        <div className="Copyright_Container">
          <span>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbirás, nº 1.532, 10º
            andar - Belo Horizonte - MG © 2017
          </span>
          <span>Seguros Promo - Emitir Shop | By - 2XT Tecnologia</span>
        </div>
        <img src="/assets/partners.png" alt="Logo dos parceiros" />  
      </div>
    </footer>
  );
};
