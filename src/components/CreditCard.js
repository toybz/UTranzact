import { useState } from "react";

const formatInput = (value, _index, insertData) => {
  const strArray = value.split("");
  return strArray.map((char, index) => {
    if (index % _index === 0) {
      return `${insertData}${char}`;
    } else {
      return char;
    }
  });
};

export default function CreditCard({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
  walletName,
  balance,
}) {
  const [flipCreditCard, setFlipCreditCard] = useState(false);

  const toggleCard = () => {
    setFlipCreditCard((prev) => !prev);
  };

  return (
    <div className="margin-b-30">
      <div
        className={`emBlockCreaditCard preload ${flipCreditCard && "flipped"}`}
      >
        <div className="contentCredit">
          <div className="creaditCard__front" onClick={toggleCard}>
            <div className="emhead_card">
              <span className="card-name">{walletName}</span>
              <div className="type__card card-name" id="ccSingle">
                <span className="size-12">NGN</span>
                {balance}
              </div>
            </div>
            <div className="embody_card">
              <p className="number__card" id="numberOn_card">
                {" "}
                {formatInput(cardNumber, 4, " ")}
              </p>
            </div>
            <div className="emfooter_card">
              <div className="txt">
                <span>Card Holder</span>
                <p id="nameOn_card">{cardHolderName}</p>
              </div>
              <div className="txt">
                <span>Expires</span>
                <p id="date_card"> {expirationDate}</p>
              </div>
            </div>
          </div>

          <div className="creaditCard__back" onClick={toggleCard}>
            <div className="header__cardBack">
              <div className="form-group m-0">
                <label>Security Code (CVV)</label>
                <input
                  type="text"
                  className="form-control"
                  value={cvv}
                  id="securityOn_card"
                  disabled
                />
              </div>
            </div>
            <div className="footer__cardBack">
              <span>Don't share data with anyone</span>
              <div className="type__card img_credit" id="ccSingleBack"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
