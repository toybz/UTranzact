import { useTransactions } from "../hooks/useTransactions";
import { useState } from "react";
import OpsSubmitButton from "./OpsSubmitButton";
import { AIRTIME, PAYMENT } from "../constant/transactionCategories";
import { closeModal, showToast } from "../helpers/Utils";

const MODAL_ID = "airtime_modal";

export const openBuyAirtimeModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function BuyAirtime() {
  const {
    userWallets,
    selectedDebitWallet,
    selectWallet,
    setSelectedDebitWallet,
    newTransaction,
    isProcessingTransaction,
    setIsProcessingTransaction,
  } = useTransactions();

  const [mobileNumber, setMobileNumber] = useState("");

  const [amount, setAmount] = useState("");

  const canSubmit = selectedDebitWallet && amount;

  const buyAirtime = () => {
    setIsProcessingTransaction(true);
    const transactionData = {
      amount,
      benefactor: {
        accountProvider: {
          id: "",
          image: "",
          name: "",
        },
        destinationId: mobileNumber,
        name: "",
      },
      category: PAYMENT,
      subCategory: AIRTIME,
      dateTime: Date.now(),
      debitWallet: {
        id: selectedDebitWallet.id,
        name: selectedDebitWallet.name,
      },
      description: "",
      status: "Successful",
    };

    newTransaction(transactionData).then(() => {
      setTimeout(() => {
        closeModal(MODAL_ID);
        setSelectedDebitWallet(userWallets[0]);
        setAmount("");
        setMobileNumber("");
        setIsProcessingTransaction(false);
        showToast("Airtime Purchased Successfully", "success");
      }, 2000);
    });
  };

  return (
    <>
      <div
        className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
        id={MODAL_ID}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header padding-l-20 padding-r-20 justify-content-center">
              <div className="itemProduct_sm">
                <h1 className="size-18 weight-600 color-secondary m-0">
                  Buy Airtime
                </h1>
              </div>
              {/*here is close button */}
              <div className="absolute right-0 padding-r-20">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="tio-clear" />
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="padding-t-20">
                <form action="#">
                  {selectWallet}
                  <div className="form-group input-lined relative">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="080********"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required=""
                    />
                    <label>Enter Mobile Number</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="text"
                      className="form-control"
                      min="0"
                      placeholder="000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required=""
                    />
                    <label>Enter Amount</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton
                disable={!canSubmit}
                onClick={buyAirtime}
                isProcessing={isProcessingTransaction}
                text="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
