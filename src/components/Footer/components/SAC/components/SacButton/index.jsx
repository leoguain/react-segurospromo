import React from "react";
import "./styles.css";

export const SacButton = ({text, href, icon, vertical}) => {
  const defaultClassButton = "SacButton"
  const variation = String(text).length > 30 ? " VerticalDisplay SmallFont " : " VerticalDisplay "
  const classButton = vertical ? defaultClassButton + variation : defaultClassButton

  return (
    <a className={classButton} href={href}>
      {icon && <img src={icon} alt="" /> }
      {text}
    </a>
  );
};
