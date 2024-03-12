import React from "react";
import "./styles.css";
import { SacButton } from "./components/SacButton";

export const SAC = () => {
  return (
    <div className="SAC_Container">
      {/* Div de Central de Vendas  */}
      <div className="SAC_SubContainer">
        <span>CENTRAL DE VENDAS:</span>
        <SacButton 
          text={"(31) 4000-1667"} 
          href={"tel:3140001667"} 
          icon={"/assets/icons/cellphone.png"} 
        />
        <SacButton 
          text={"(31) 98204-2542"} 
          href={"https://web.whatsapp.com/send?phone=5531982042542"} 
          icon={"/assets/icons/whatsapp.png"} 
        />
      </div>
      {/* Div de Atendimento Geral */}
      <div className="SAC_SubContainer">
        <span>ATENDIMENTO:</span>
        <SacButton 
          text={"(31) 4000-1667"} 
          href={"tel:3140001667"} 
          icon={"/assets/icons/cellphone.png"} 
        />
        <SacButton 
          text={"Central de ajuda"} 
          href={"/"}  
        />
        <SacButton 
          text={"atendimento@segurospromo.com.br"} 
          href={"mailto:atendimento@segurospromo.com.br"} 
          icon={"/assets/icons/mail.png"} 
          vertical 
        />
      </div>
    </div>
  );
};
