import React from "react";
import "./styles.css";
import { QuoteButton } from "../QuoteButton";

export const Hero = () => {
  return (
    <section className="Hero_Container">
      <div className="Hero_SubContainer">
        {/* Container Superior / Título */}
        <div className="Hero_TopContainer">
          <h1>Tranquilidade para viver mais</h1>
        </div>
        {/* Container Inferior / Sub-texto + botão */}
        <div className="Hero_BottomContainer">
          <span>
            Viva mais e melhor com os benefícios que um seguro de vida te oferece
          </span>
          {/* Botão padrão - Faça sua cotação */}
          <QuoteButton />
        </div>
      </div>
    </section>
  );
};
