import { useTransactions } from "../hooks/useTransactions";
import { useState } from "react";
import OpsSubmitButton from "./OpsSubmitButton";
import { ELECTRICITY, PAYMENT } from "../constant/transactionCategories";
import { closeModal, showToast } from "../helpers/Utils";

const MODAL_ID = "power_modal";

export const openBuyPowerModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function BuyPower() {
  const {
    userWallets,
    selectedDebitWallet,
    selectWallet,
    setSelectedDebitWallet,
    newTransaction,
    isProcessingTransaction,
    setIsProcessingTransaction,
  } = useTransactions();

  const distros = [
    {
      name: "Ikedc",
      id: "1",
    },
    {
      name: "Ekedc",
      id: "2",
    },
    {
      name: "Phd",
      id: "3",
    },
  ];

  const [meterId, setMeterId] = useState("");

  const [amount, setAmount] = useState("");

  const [selectedDistro, setSelectedDistro] = useState({ id: "", name: "" });

  const updateSelectedDistro = (e) => {
    const selectedDistroId = e.target.value;
    const distro = distros.find(
      (d) => parseInt(d.id) === parseInt(selectedDistroId)
    );
    setSelectedDistro(distro);
  };

  const canSubmit = selectedDebitWallet && selectedDistro && meterId && amount;

  const buyPower = () => {
    setIsProcessingTransaction(true);
    const transactionData = {
      amount: amount,
      benefactor: {
        accountProvider: {
          id: selectedDistro.id,
          image: "",
          name: selectedDistro.name,
        },
        destinationId: meterId,
        name: "",
        purchaseItem: "",
      },
      category: PAYMENT,
      subCategory: ELECTRICITY,
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
        setMeterId("");
        setIsProcessingTransaction(false);
        showToast("Power Purchased Successfully", "success");
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
                  Buy Power
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
                  <i className="tio-clear"></i>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="padding-t-20">
                <form action="#">
                  {selectWallet}

                  <div className="form-group input-lined">
                    <select
                      className="form-control custom-select"
                      onChange={updateSelectedDistro}
                    >
                      <option value="">Select</option>
                      {distros.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                    <label>Select Distro</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="text"
                      className="form-control"
                      value={meterId}
                      onChange={(e) => {
                        setMeterId(e.target.value);
                      }}
                      placeholder="0001111"
                      required=""
                    />
                    <label>Enter Meter ID</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="number"
                      className="form-control"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      placeholder="1000"
                      required=""
                    />
                    <label>Amount</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton
                text={"Submit"}
                disable={!canSubmit}
                isProcessing={isProcessingTransaction}
                processingText={"Processing..."}
                onClick={buyPower}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
