import React, {useContext} from "react";
import "./styles.css";
import ScreenWidthContext from '../../context/ScreenWidthContext';
import { QuoteButton } from "../QuoteButton";

export const HowToHire = () => {
  const mobileScreen = useContext(ScreenWidthContext) > 480 ? false : true;

  return (
    <section className="HowToHire_Container">
      <div className="HowToHire_SubContainer">
        {!mobileScreen && 
          <div className="HowToHire_LeftContainer">
            <img
              src="/assets/objects/notebook-cellphone.png"
              alt="Notebook e celular"
              className="HowToHire_Image"
            />
          </div>
        }
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
            {mobileScreen && 
              <img
                src="/assets/objects/notebook-cellphone.png"
                alt="Notebook e celular"
                className="HowToHire_Image"
              />
            }
            <QuoteButton />
          </div>
        </div>
      </div>      
    </section>
  );
};