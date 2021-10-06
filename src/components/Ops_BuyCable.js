import { useTransactions } from "../hooks/useTransactions";
import { useState } from "react";
import OpsSubmitButton from "./OpsSubmitButton";
import { PAY_TV, PAYMENT } from "../constant/transactionCategories";
import { closeModal, showToast } from "../helpers/Utils";

const MODAL_ID = "cable_modal";

export const openBuyPayTvModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};
const providers = [
  {
    id: 1,
    name: "DSTV",
    packages: [
      { id: 1, name: "Dstv Yanga", amount: 2000 },
      { id: 2, name: "Dstv Confam", amount: 6000 },
      { id: 3, name: "Dstv Compact", amount: 8000 },
      { id: 4, name: "Dstv Premium", amount: 18000 },
    ],
  },
  {
    id: 2,
    name: "GoTv",
    packages: [
      { id: 1, name: "Gotv Yanga", amount: 2000 },
      { id: 2, name: "Gotv Confam", amount: 4000 },
    ],
  },
  {
    id: 3,
    name: "Startimes",
    packages: [
      { id: 1, name: "Startimes Yanga", amount: 2000 },

      { id: 2, name: "Startimes Confam", amount: 6000 },
    ],
  },
];

export default function BuyCable() {
  const {
    selectWallet,
    selectedDebitWallet,
    newTransaction,
    isProcessingTransaction,
    setIsProcessingTransaction,
  } = useTransactions();

  const [smartCard, setSmartCard] = useState("");

  const [selectedProvider, setSelectedProvider] = useState({});
  const [selectedPackage, setSelectedPackage] = useState({});
  const changeSelectedProvider = (e) => {
    const providerId = e.target.value;

    const provider = providers.find((item) => +item.id === +providerId);
    setSelectedProvider(provider);
  };

  const changeSelectedPackage = (e) => {
    const packageId = e.target.value;
    const packageItem = selectedProvider.packages.find(
      (item) => +item.id === +packageId
    );

    setSelectedPackage(packageItem);
  };

  const canSubmit = selectedDebitWallet && selectedProvider && smartCard;

  const buyCable = () => {
    setIsProcessingTransaction(true);
    const transactionData = {
      amount: selectedPackage.amount + "",
      benefactor: {
        accountProvider: {
          id: selectedProvider.id,
          image: "",
          name: selectedProvider.name,
        },
        destinationId: smartCard,
        name: "",
        purchaseItem: selectedPackage.name,
      },
      category: PAYMENT,
      subCategory: PAY_TV,
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
        //  setSelectedDebitWallet(userWallets[0]);
        setSmartCard("");
        setIsProcessingTransaction(false);
        showToast("Cable Purchased Successfully", "success");
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
                  Buy CableTv Subscription
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
                      onChange={changeSelectedProvider}
                    >
                      <option value="">Click To Select</option>
                      {providers.map((provider) => (
                        <option key={provider.id} value={provider.id}>
                          {provider.name}
                        </option>
                      ))}
                    </select>
                    <label>Select Provider</label>
                  </div>

                  <div className="form-group input-lined">
                    <select
                      className="form-control custom-select"
                      onChange={changeSelectedPackage}
                    >
                      <option value="">Click To Select</option>

                      {selectedProvider?.packages &&
                        selectedProvider.packages.map((packageItem) => (
                          <option key={packageItem.id} value={packageItem.id}>
                            {packageItem.name} - {packageItem.amount}
                          </option>
                        ))}
                    </select>
                    <label>Select Package</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="number"
                      className="form-control"
                      value={smartCard}
                      onChange={(e) => setSmartCard(e.target.value)}
                      placeholder="00123"
                      required=""
                    />
                    <label>Enter Smart Card ID</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton
                onClick={buyCable}
                processingText={"Processing..."}
                isProcessing={isProcessingTransaction}
                text={"Submit"}
                disable={!canSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
