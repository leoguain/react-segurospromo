import React, {useContext} from "react";
import "./styles.css";

import ScreenWidthContext from '../../context/ScreenWidthContext';
import { Hero } from "../Hero";
import { HowToHire } from "../HowToHire";
import { Coverages } from "../Coverages";
import { ReasonsToHave } from "../ReasonsToHave";
import { ContactBanner } from "../ContactBanner";

export const LandingPage = () => {
  //constante que retorna a largura da tela utilizada pelo usuário
  const screenWidth = useContext(ScreenWidthContext);

  return (
    <main className="LandingPage_Container">
      {/* Banner Hero */}
      <Hero />
      {/* Componente Como Contratar */}
      <HowToHire />
      {/* Componente de Coberturas do plano: título e sub-texto variáveis entre desktop e mobile. */}
      <Coverages 
        title={"Nossas coberturas"} 
        subText={screenWidth > 480 ? "Veja mais detalhes de cada proteção!" : "Contratar um Seguro de Vida garante que:"} 
      />
      {/* Componente de Motivos para contratar: título variável entre desktop e mobile */}
      <ReasonsToHave 
        title={screenWidth > 480 ? "Mas por que ter um seguro de vida?" : "Por que ter um seguro de vida?"} 
      />
      {/* Componente de Banner de contato: título, sub-texto, número de telefone, texto do botão e texto de rodapé, variáveis entre desktop e mobile */}
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