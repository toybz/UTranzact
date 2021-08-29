import { useSelector } from "react-redux";
import {
  AIRTIME,
  DATA,
  ELECTRICITY,
  PAY_TV,
  TRANSFER,
} from "../../helpers/transactionCategories";

const MODAL_ID = "confirm_saved_payment_transaction_modal";

export const openConfirmTransactionModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export function ConfirmTransaction() {
  const { category, subCategory, amount, benefactor, debitWallet } =
    useSelector((store) => store.transactionDetails);

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
                  Confirm Transaction
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
                <div className="trans__number margin-t-20 padding-b-30">
                  <h3>
                    {amount} <span>NGN</span>
                  </h3>
                  <p>Amount</p>
                </div>
                <div className="bk__convPersons emBK__transactions">
                  <div className="item_trans">
                    <div className="media sideLeft">
                      <div className="icon_img bg-pink">
                        <p className="color-white">
                          {debitWallet.name.slice(0, 2)}
                        </p>
                      </div>
                      <div className="media-body my-auto">
                        <h4>{debitWallet.name}</h4>
                        <p>Debit Wallet</p>
                      </div>
                    </div>
                    <div className="sideRight">
                      <div className="icon sender">
                        <svg
                          id="Iconly_Light_Arrow_-_Up_Square"
                          data-name="Iconly/Light/Arrow - Up Square"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Arrow_-_Up_Square"
                            data-name="Arrow - Up Square"
                            transform="translate(22 22) rotate(180)"
                          >
                            <path
                              id="Stroke_1"
                              data-name="Stroke 1"
                              d="M4.916,18.5h8.669c3.02,0,4.915-2.139,4.915-5.166V5.166C18.5,2.139,16.615,0,13.585,0H4.916C1.886,0,0,2.139,0,5.166v8.168C0,16.361,1.886,18.5,4.916,18.5Z"
                              transform="translate(0.75 0.75)"
                              fill="none"
                              stroke="#25c998"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                              opacity="0.4"
                            />
                            <path
                              id="Stroke_3"
                              data-name="Stroke 3"
                              d="M.5,8.172V0"
                              transform="translate(9.5 5.914)"
                              fill="none"
                              stroke="#25c998"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Stroke_5"
                              data-name="Stroke 5"
                              d="M7.5,0,3.748,3.764,0,0"
                              transform="translate(6.252 10.322)"
                              fill="none"
                              stroke="#25c998"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="item_trans">
                    <div className="media sideLeft">
                      <div className="icon_img bg-pink">
                        {benefactor.accountProvider.image ? (
                          <img src={benefactor.accountProvider.image} alt="" />
                        ) : (
                          <span className="color-white">
                            {benefactor.accountProvider.name.slice(0, 2)}
                          </span>
                        )}
                      </div>

                      {category !== TRANSFER && (
                        <div className="media-body my-auto">
                          <h4>{benefactor.destinationId}</h4>

                          <p>Account ID</p>
                        </div>
                      )}

                      {category === TRANSFER && (
                        <div className="media-body my-auto">
                          <h4>{benefactor.name}</h4>
                          <p>{benefactor.accountProvider.name}</p>
                          <p>{benefactor.destinationId}</p>
                          <p>Receiver</p>
                        </div>
                      )}
                    </div>
                    <div className="sideRight">
                      <div className="icon recipient">
                        <svg
                          id="Iconly_Light_Arrow_-_Down_Square"
                          data-name="Iconly/Light/Arrow - Down Square"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            id="Arrow_-_Down_Square"
                            data-name="Arrow - Down Square"
                            transform="translate(2 2)"
                          >
                            <path
                              id="Stroke_1"
                              data-name="Stroke 1"
                              d="M4.916,18.5h8.669c3.02,0,4.915-2.139,4.915-5.166V5.166C18.5,2.139,16.615,0,13.585,0H4.916C1.886,0,0,2.139,0,5.166v8.168C0,16.361,1.886,18.5,4.916,18.5Z"
                              transform="translate(0.75 0.75)"
                              fill="none"
                              stroke="#ff833b"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                              opacity="0.4"
                            />
                            <path
                              id="Stroke_3"
                              data-name="Stroke 3"
                              d="M.5,8.172V0"
                              transform="translate(9.5 5.914)"
                              fill="none"
                              stroke="#ff833b"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Stroke_5"
                              data-name="Stroke 5"
                              d="M7.5,0,3.748,3.764,0,0"
                              transform="translate(6.252 10.322)"
                              fill="none"
                              stroke="#ff833b"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              strokeWidth="1.5"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {subCategory === AIRTIME && (
                  <p className="color-text size-13 text-center mb-0">
                    You are buying{" "}
                    <span className="color-secondary">{amount} NGN</span>{" "}
                    Airtime to
                    <span className="color-secondary">
                      {" " + benefactor.destinationId}{" "}
                    </span>
                  </p>
                )}

                {subCategory === DATA && (
                  <p className="color-text size-13 text-center mb-0">
                    You are buying{" "}
                    <span className="color-secondary">
                      {benefactor.purchaseItem.name}{" "}
                    </span>{" "}
                    Data to
                    <span className="color-secondary">
                      {benefactor.destinationId}{" "}
                    </span>
                  </p>
                )}

                {subCategory === ELECTRICITY && (
                  <p className="color-text size-13 text-center mb-0">
                    You are buying{" "}
                    <span className="color-secondary">{amount} NGN</span>{" "}
                    Electricity Units to
                    <span className="color-secondary">
                      {benefactor.destinationId}{" "}
                    </span>
                  </p>
                )}

                {subCategory === PAY_TV && (
                  <p className="color-text size-13 text-center mb-0">
                    You are buying{" "}
                    <span className="color-secondary">
                      {benefactor?.purchaseItem?.name}{" "}
                    </span>{" "}
                    Subscription to{" "}
                    <span className="color-secondary">
                      {benefactor.destinationId}{" "}
                    </span>
                  </p>
                )}

                {category === TRANSFER && (
                  <p className="color-text size-13 text-center mb-0">
                    You are sending{" "}
                    <span className="color-secondary">{amount} NGN</span> to
                    <span className="color-secondary">
                      {" " + benefactor.name}{" "}
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                data-dismiss="modal"
                className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
