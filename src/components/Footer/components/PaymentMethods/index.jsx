import React from "react";
import "./styles.css";
import { useCreditCardsLogos } from "../../../../hooks/useCreditCardsLogos";
import { useBanksLogos } from "../../../../hooks/useBanksLogos";


export const PaymentMethods = () => {
  const { banksLogos } = useBanksLogos();
  const { creditCardsLogos } = useCreditCardsLogos();

  return (
    <div className="PaymentMethods_Container">
      <h5>FORMAS DE PAGAMENTO:</h5>

      <div className="PaymentMethods_SubContainer">
        <span>Crédito em até 12 vezes</span>
        <div className="Logos_Container">
          {creditCardsLogos.map(({ id, path, alt }) => (
            <img key={id} src={path} alt={alt} />
          ))}
        </div>
      </div>
      <div className="PaymentMethods_SubContainer">
        <span>Boleto bancário</span>
        <div className="Logos_Container">
          <img
            src="/assets/boleto-logo.png"
            alt="Logo Boleto"
            width="43.75px"
          />
          <img
            src="/assets/discount.png"
            alt=""
          />
        </div>
      </div>
      <div className="PaymentMethods_SubContainer">
        <span>Transferência bancária</span>
        <div className="Logos_Container">
          {banksLogos.map(({ id, path, alt }) => (
            <img key={id} src={path} alt={alt} />
          ))}
        </div>
      </div>
      <div className="PaymentMethods_SubContainer">
        <span>Pagamento com pix</span>
        <img src="/assets/pix-logo.png" alt="Logo Pix." />
      </div>
    </div>
  );
};
