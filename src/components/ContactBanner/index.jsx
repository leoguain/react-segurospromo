import React from "react";
import "./styles.css";

export const ContactBanner = ({title, subText, phoneNumber, buttonText, footText}) => {
  return (
    <section className="ContactBanner_Container">
      {/* Container esquerdo/superior (mob.) - Título  */}
      <div className="ContactBanner_LeftContainer">
        <h2>{title}</h2>
      </div>
      {/* Container direito/inferior (mob.) - Textos e Botão  */}
      <div className="ContactBanner_RightContainer">
        <div className="ContactBanner_Texts">
          <span className="Message">
            {subText}
          </span>
          <span className="PhoneNumber">
            <img src="/assets/icons/phone.png" alt=""/> 
            {phoneNumber}
          </span>
        </div>
        <div className="ContactBanner_Button">
          <button className="WhatsappButton">
            <img src="/assets/icons/whatsapp.png" alt="" width="24px"/> 
            {buttonText}
          </button>
          <span className="FootNote">{footText}</span>
        </div>
      </div>
    </section>
  );
};
