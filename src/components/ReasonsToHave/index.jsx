import React from "react";
import "./styles.css";
import { QuoteButton } from "../QuoteButton";
import { ReasonsAccordion } from "./components/ReasonsAccordion";

export const ReasonsToHave = ({title}) => {
  return (
    <section className="ReasonsToHave_Container">
      {/* Container Superior/ Order 1 (Mob.) - Título da seção */}
      <div className="ReasonsToHave_Title">
        <h2>{title}</h2>
      </div>
      {/* Container Esquerdo/ Order 2 (Mob.) + Accordion */}
      <div className="ReasonsToHave_SubLeftContainer">
        <ReasonsAccordion />
      </div>
      {/* Container Direito/ Order 0 (Mob.) + Imagem */}
      <div className="ReasonsToHave_SubRightContainer">
        <img src="/assets/couple.png" alt="Casal comemorando" width="80%" />
      </div>
      {/* Container Inferior/ Order 3 (Mob.) + Botão */}
      <div className="ReasonsToHave_Button">
        {/* Botão padrão - Faça sua cotação */}
        <QuoteButton />
      </div>
    </section>   
  );
};

