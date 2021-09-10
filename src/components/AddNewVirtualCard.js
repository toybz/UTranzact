import { useState } from "react";
import OpsSubmitButton from "./OpsSubmitButton";
import useWallet from "../hooks/useWallet";
import { showToast } from "../helpers/Utils";

const MODAL_ID = "add_virtual_card_modal";

export const openAddNewVirtualCardModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

const closeModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal("hide");
};

export default function AddNewVirtualCard() {
  const { addNewWallet } = useWallet();

  const [walletName, setWalletName] = useState("");

  const [amount, setAmount] = useState("");

  const canSubmit = walletName && amount;

  const [isAddingWallet, setIsAddingWallet] = useState(false);

  const addVirtualCard = () => {
    setIsAddingWallet(true);
    addNewWallet({ amount, walletName }).then(() => {
      setIsAddingWallet(false);
      showToast("Virtual Card Added Successfully", "success");
      closeModal();
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
                  New Virtual Card
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
                  <div className="form-group input-lined relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Entertainment Wallet"
                      value={walletName}
                      onChange={(e) => setWalletName(e.target.value)}
                      required=""
                    />
                    <label>Enter Wallet Name</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="number"
                      className="form-control"
                      min="0"
                      placeholder="1000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required=""
                    />
                    <label>Enter Setup Amount</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton
                disable={!canSubmit}
                onClick={addVirtualCard}
                isProcessing={isAddingWallet}
                processingText={"Processing..."}
                text="Create Virtual Card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
