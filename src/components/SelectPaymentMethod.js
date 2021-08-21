import OpsSubmitButton from "./OpsSubmitButton";
import { useState } from "react";
import {Link, useHistory} from "react-router-dom";

import { MODAL_ID as FundAccountModalId } from "./Ops_FundCard";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import useWallet from "../hooks/useWallet";
import {useSelector} from "react-redux";


const MODAL_ID = "select_payment_method_modal";

export const openSelectPaymentMethodModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

const closeModals = () => {
  document.jQuery(`#${MODAL_ID}`).modal("hide");
  document.jQuery(`#${FundAccountModalId}`).modal("hide");
};

export default function SelectPaymentMethod() {
  const cards = [
    {
      number: "4002 **** **** 0970",
      expires: "04/23",
      id: "01",
    },
    {
      number: "3210 **** **** 9850",
      expires: "09/26",
      id: "02",
    },
  ];
  const [selectedCardId, setSelectedCardId] = useState(cards[0].id);

  const {updateWalletBalance} = useWallet();

  let history = useHistory();
  const { amount } = useSelector((store) => store.fundCard);

  const makePayment = async () => {

    setIsProcessing(true);

    await updateWalletBalance()
    setIsProcessing(false);
    closeModals();
    history.push("/~/dashboard");
  };

  //5531 8866 5214 2950
  const flutterwavePaymentConfig = {
    public_key: "FLWPUBK_TEST-4550165677fdcf951548729e3ff6b950-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "",
    customer: {
      email: "test@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "UTransact",
      description: "Payment UTransact Wallet Topup",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(flutterwavePaymentConfig);

  const payWithFlutterwave = () => {
    handleFlutterPayment({ callback: ()=>{
        closePaymentModal();
        makePayment()
      } , onClose: () => {} });
  };



  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <>
      <div
        className="modal transition-bottom screenFull defaultModal confirm__transfer mdlladd__rate fade"
        id={MODAL_ID}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header padding-l-20 padding-r-20 justify-content-center">
              <div className="itemProduct_sm">
                <h1 className="size-18 weight-600 color-secondary m-0">
                  Select Method
                </h1>
              </div>
              <div className="absolute right-0 padding-r-20">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="tio-clear"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="padding-t-20 padding-b-30">
                <section className="emSection__payment" style={{ padding: 0 }}>
                  <div className="credite_saved itemSingle">
                    {cards.map((card) => (
                      <button
                        type="button"
                        className={`btn item item_credit ${
                          card.id === selectedCardId && "selected"
                        }`}
                        onClick={() => setSelectedCardId(card.id)}
                        key={card.id}
                      >
                        <div className="media align-items-center">
                          <div className="icon">
                            <img src="assets/img/icon/visa.svg" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="txt">
                              <h5>{card.number}</h5>
                              <span>Expires {card.expires}</span>
                            </div>
                          </div>
                        </div>
                        <div className="check">
                          <i className="ri-check-fill"></i>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="padding-20 px-0">
                    <p className="size-14 color-text m-0">
                      Choose a new method
                    </p>
                  </div>

                  <Link
                    to="/~/pay-with-new-credit-card"
                    className="btn itemPay"
                    onClick={closeModals}
                  >
                    <span>Credit Card</span>
                    <div className="icon__payment">
                      <img src="assets/img/icon/visa.svg" alt="" />
                      <img src="assets/img/icon/american-express.svg" alt="" />
                      <img src="assets/img/icon/shopify.svg" alt="" />
                      <img src="assets/img/icon/master-card.svg" alt="" />
                    </div>
                  </Link>
                  <button className="btn itemPay" onClick={payWithFlutterwave}>
                    <span>Flutterwave</span>
                    <div className="icon__payment">
                      <img src="assets/img/icon/paypal.svg" alt="" />
                    </div>
                  </button>
                </section>
              </div>
            </div>

            <div className="modal-footer">
              <OpsSubmitButton
                onClick={makePayment}
                text="Fund"
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
