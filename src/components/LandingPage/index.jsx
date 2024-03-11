import React, {useContext} from "react";
import "./styles.css";

import ScreenWidthContext from '../../context/ScreenWidthContext';
import { Hero } from "../Hero";
import { HowToHire } from "../HowToHire";
import { Coverages } from "../Coverages";
import { ReasonsToHave } from "../ReasonsToHave";
import { ContactBanner } from "../ContactBanner";

export const LandingPage = () => {
  const screenWidth = useContext(ScreenWidthContext);

  return (
    <main className="LandingPage_Container">
      <Hero />
      <HowToHire />
      <Coverages 
        title={"Nossas coberturas"} 
        subText={screenWidth > 480 ? "Veja mais detalhes de cada proteção!" : "Contratar um Seguro de Vida garante que:"} 
      />
      <ReasonsToHave 
        title={screenWidth > 480 ? "Mas por que ter um seguro de vida?" : "Por que ter um seguro de vida?"} 
      />
      <ContactBanner 
        title={screenWidth > 480 ? "Ainda não sabe qual seguro contratar?" : "Ainda tem dúvidas sobre seguro de vida?"}
        subText={screenWidth > 480 ? "Ligue pra gente e receba uma consultoria personalizada gratuitamente!" : "Entre em contato e receba uma consultoria personalizada gratuitamente"}
        phoneNumber={"(99) 99999.9999"}
        buttonText={screenWidth > 480 ? "Se preferir, entre em contato pelo Whatsapp" : "Também respondemos pelo Whatsapp!"}
        footText={"Atendemos pelo telefone de seg. a sex., das 9h às 17h"}
      />
    </main>
  );
};