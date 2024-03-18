import React from "react";
import "./styles.css";

export const CoverageCard = ({ iconSrc, iconAlt, title, description}) => {
  return (
    <article className="Card_Container">
      <img src={iconSrc} alt={iconAlt} height="50px" />
      <span>{title}</span>
      <p>{description}</p>
      <a href="/">
        <button>Saiba Mais</button>
      </a>
    </article>
  );
};
