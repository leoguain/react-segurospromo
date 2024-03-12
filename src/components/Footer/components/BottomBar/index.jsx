import React from "react";
import "./styles.css";

export const BottomBar = () => {
  return (
    <div className="BottomBar_Container">
      <div className="Copyright_Container">
        <span>
          2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbirás, nº 1.532, 10º
          andar - Belo Horizonte - MG © 2017
        </span>
        <span>Seguros Promo - Emitir Shop | By - 2XT Tecnologia</span>
      </div>
      <img src="/assets/partners.png" alt="Logo dos parceiros" />  
    </div>
  );
};
