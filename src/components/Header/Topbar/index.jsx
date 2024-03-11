import React from "react";
import "./styles.css";

export const Topbar = () => {
  return (
    <div className="Topbar_Container">
      <span>CENTRAL DE VENDAS:</span>
      <div className="Contact">
        <img src="/assets/icons/cellphone.png" alt="Cellphone icon." width="12px" />
        <a href="tel:3140001667">
          <span className="ContactNumber">(31) 4000-1667</span>
        </a>
      </div>
      <div className="Contact">
        <img src="/assets/icons/whatsapp.png" alt="Whatsapp icon." width="24px" />
        <a href="https://web.whatsapp.com/send?phone=553125342115">
          <span className="ContactNumber">(31) 2534-2115</span>
        </a>
      </div>
    </div>
  );
};
