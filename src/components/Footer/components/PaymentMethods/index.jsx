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
        {/* Componente de opção de pagamento Crédito */}
        <div className="PaymentMethods_ItemContainer">
          <span>Crédito em até 12 vezes</span>
          {/* Carrega as logos de cartão de créditos, via hook creditCardsLogos */}
          <div className="Logos_Container">
            {creditCardsLogos.map(({ id, path, alt }) => (
              <img key={id} src={path} alt={alt} />
            ))}
          </div>
        </div>
        {/* Componente de opção de pagamento Boleto Bancário */}
        <div className="PaymentMethods_ItemContainer">
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
        {/* Componente de opção de pagamento Transferência Bancária*/}
        <div className="PaymentMethods_ItemContainer">
          <span>Transferência bancária</span>
          {/* Carrega as logos de bancos, via hook banksLogos */}
          <div className="Logos_Container">
            {banksLogos.map(({ id, path, alt }) => (
              <img key={id} src={path} alt={alt} />
            ))}
          </div>
        </div>
        {/* Componente de opção de pagamento Pix */}
        <div className="PaymentMethods_ItemContainer">
          <span>Pagamento com pix</span>
          <img src="/assets/pix-logo.png" alt="Logo Pix." />
        </div>
      </div>
    </div>
  );
};
