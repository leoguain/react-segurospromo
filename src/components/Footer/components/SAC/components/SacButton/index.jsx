import React from "react";
import "./styles.css";

export const SacButton = ({text, href, icon, vertical}) => {
  // Variação de direção do botão (row/column) + verificador de tamanho de texto 
  const variation = String(text).length > 30 ? " VerticalDisplay SmallFont " : " VerticalDisplay "

  return (
    <a className={`SacButton ${vertical ? variation : ""}`} href={href}>
      {icon && <img src={icon} alt="" /> }
      {text}
    </a>
  );
};
