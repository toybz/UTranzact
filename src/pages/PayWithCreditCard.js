import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Page from "./Page";
import { useState } from "react";
import OpsSubmitButton from "../components/OpsSubmitButton";
import { showToast } from "../helpers/Utils";
import { useHistory } from "react-router-dom";
import useWallet from "../hooks/useWallet";

export default function PayWithCreditCard(props) {
  const [flipCreditCard, setFlipCreditCard] = useState(false);

  const toggleCard = () => {
    setFlipCreditCard((prev) => !prev);
  };


  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formatInput = (value, _index, insertData) => {
    const strArray = value.split("");
    return strArray.map((char, index) => {
      if (index % _index === 0) {
        return `${insertData}${char}`;
      }
      else{ return char;}

    });
  };



  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();
  const {updateWalletBalance} = useWallet();

  const disableSubmitButton = (!cardNumber || !cardHolderName || !expiryDate || !cvv)

  const parseExpirationDate = function(){

  }

  const submit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);
   await updateWalletBalance()
    setIsSubmitting(false);
    history.push("/~/dashboard");
  };

  return (
    <>
      <Page>
        <Header
          pageTitle={"Pay With Credit Card"}
          leftItem={() => <BackButton />}
          rightItem={() => <></>}
        />
        <section className="emSection__payment pageCredit__Card">
          <div className="margin-b-30">
            <div
              className={`emBlockCreaditCard preload ${
                flipCreditCard && "flipped"
              }`}
            >
              <div className="contentCredit">
                <div className="creaditCard__front" onClick={toggleCard}>
                  <div className="emhead_card">
                    <img
                      className="img_slice"
                      src="/assets/img/icon/slice.svg"
                      alt=""
                    />
                    <div className="type__card" id="ccSingle"></div>
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
                      <p id="date_card"> {formatInput(expiryDate, 2, " ")}</p>
                    </div>
                  </div>
                </div>

                <div className="creaditCard__back" onClick={toggleCard}>
                  <div className="header__cardBack">
                    <div className="form-group m-0">
                      <label>Security Code (CVV)</label>
                      <input
                        type="password"
                        className="form-control"
                        value={cvv}
                        id="securityOn_card"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="footer__cardBack">
                    <span>Don't share data with anyone</span>
                    <div
                      className="type__card img_credit"
                      id="ccSingleBack"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="#" className="form___inputCredit">
            <div className="row">
              <div className="col-12">
                <div className="form-group input-lined relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 1324 1234 1234"
                    id="cardNumber"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    onChange={(event) => {
                      setCardNumber(event.target.value);
                    }}
                  />
                  <label htmlFor="cardNumber">Card Number</label>
                  <div className="absolute right-0 top-0 pt-3">
                    <svg
                      id="ccicon"
                      className="ccicon h-16 w-35"
                      width="750"
                      height="471"
                      viewBox="0 0 750 471"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    ></svg>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group input-lined">
                  <input
                    type="text"
                    className="form-control"
                    maxLength="20"
                    id="nameCard"
                    placeholder="John Doe"
                    required
                    onChange={(event) => {
                      setCardHolderName(event.target.value);
                    }}
                  />
                  <label htmlFor="nameCard">Card Holder</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group input-lined">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="-- / --"
                    id="expirationdate"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    value={expiryDate}
                    onChange={(e)=>setExpiryDate(e.target.value)}
                  />
                  <label htmlFor="expirationdate">Expiry Date</label>

                </div>
              </div>
              <div className="col-6">
                <div className="form-group input-lined">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234"
                    id="securitycode"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    onMouseEnter={()=>setFlipCreditCard(true)}
                    onMouseLeave={()=>setFlipCreditCard(false)}
                    onChange={(event) => {
                      setCvv(event.target.value);
                    }}
                  />
                  <label htmlFor="securitycode">Security Code (CVV)</label>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section className="padding-t-90 footer__buttons">
          <div className="area__inside fixed bottom-15 w-100 ">
            <div className="env-pb w-100">
              {/*<a href="page-my-cards-wallet.html"
                               className="btn btn__icon btn_default_lg bg-primary color-white text-left justify-content-center">
                                + Make Payment
                            </a>*/}

              <OpsSubmitButton
                disable={disableSubmitButton}
                onClick={submit}
                text="Make Payment"
                isProcessing={isSubmitting}
              />
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}
