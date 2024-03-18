import React, {useContext} from "react";
import "./styles.css";
import ScreenWidthContext from '../../context/ScreenWidthContext';
import { QuoteButton } from "../QuoteButton";

export const HowToHire = () => {
  const mobileScreen = useContext(ScreenWidthContext) > 768 ? false : true;

  return (
    <section className="HowToHire_Container">
      <div className="HowToHire_SubContainer">
        {/* Container esquerdo, visível apenas no modo desktop */}
        {!mobileScreen && 
          <figure className="HowToHire_LeftContainer">
            <img
              src="/assets/objects/notebook-cellphone.png"
              alt="Notebook e celular"
              className="HowToHire_Image"
            />
          </figure>
        }
        {/* Container direito */}
        <div className="HowToHire_RightContainer" >
          <div className="HowToHire_Content">
            <h2>Planos personalizados e sem burocracia</h2>
            <ol>
              <li>Informe seus dados</li>
              <li>Descubra o plano ideal para o seu perfil</li>
              <li>Escolha sua forma de pagamento e contrate 100% online</li>
            </ol>
            <span>
              Pronto! Agora você e sua família tem todos os benefícios de viver
              com segurança total
            </span>
            {/* Imagem visível apenas no modo mobile */}
            {mobileScreen && 
              <img
                src="/assets/objects/notebook-cellphone.png"
                alt="Notebook e celular"
                className="HowToHire_Image"
              />
            }
            {/* Botão padrão - Faça sua cotação */}
            <QuoteButton />
          </div>
        </div>
      </div>      
    </section>
  );
};