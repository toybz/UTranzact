import { useTransactions } from "../hooks/useTransactions";
import { useState } from "react";
import { DATA, PAYMENT } from "../helpers/transactionCategories";
import { closeModal, showToast } from "../helpers/Utils";
import OpsSubmitButton from "./OpsSubmitButton";

const MODAL_ID = "data_modal";

export const openBuyDataModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function BuyData() {
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

  const networksAndDataPackages = [
    {
      id: 0,
      name: "MTN",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
    {
      id: 1,
      name: "Airtel",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
    {
      id: 2,
      name: "Glo",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
    {
      id: 3,
      name: "Etisalat",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
    {
      id: 4,
      name: "Startimes",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
    {
      id: 5,
      name: "Smile",
      packages: [
        {
          id: 5,
          name: "50MB",
          amount: 100,
        },
        {
          id: 6,
          name: "150MB",
          amount: 200,
        },
        {
          id: 7,
          name: "750MB",
          amount: 500,
        },
        {
          id: 8,
          name: "1.5GB",
          amount: 1000,
        },
        {
          id: 9,
          name: "3.5GB",
          amount: 3500,
        },
      ],
    },
  ];
  const [selectedMobileNetwork, setSelectedMobileNetwork] = useState({
    id: "",
    name: "",
    packages: [],
  });

  const [selectedDataPackage, setSelectedDataPackage] = useState({
    id: "",
    name: "",
  });

  const updateSelectedNetwork = (e) => {
    const selectedNetworkId = e.target.value;
    const network = networksAndDataPackages.find(
      (item) => parseInt(item.id) === parseInt(selectedNetworkId)
    );

    setSelectedMobileNetwork({
      id: network.id,
      name: network.name,
      packages: network.packages,
    });
  };

  const updateSelectedPackages = (e) => {
    const selectedPackageId = e.target.value;

    const dataPackage = selectedMobileNetwork.packages.find(
      (item) => parseInt(item.id) === parseInt(selectedPackageId)
    );

    setSelectedDataPackage(dataPackage);
  };

  const canSubmit =
    selectedDebitWallet && selectedMobileNetwork && selectedDataPackage;

  const buyData = () => {
    setIsProcessingTransaction(true);
    const transactionData = {
      amount: selectedDataPackage.amount + "",
      benefactor: {
        accountProvider: {
          id: selectedMobileNetwork.id,
          image: "",
          name: selectedMobileNetwork.name,
        },
        destinationId: mobileNumber,
        name: "",
        purchaseItem: selectedDataPackage,
      },
      category: PAYMENT,
      subCategory: DATA,
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
        setMobileNumber("");
        setIsProcessingTransaction(false);
        showToast("Data Purchased Successfully", "success");
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
                  Buy Data
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
                      onChange={updateSelectedNetwork}
                    >
                      <option value="">Select</option>

                      {networksAndDataPackages.map((network) => (
                        <option key={network.id} value={network.id}>
                          {network.name}
                        </option>
                      ))}
                    </select>
                    <label>Select Network</label>
                  </div>

                  <div className="form-group input-lined">
                    <select
                      className="form-control custom-select"
                      onChange={updateSelectedPackages}
                    >
                      <option value="">Select</option>
                      {selectedMobileNetwork.packages.map((dataPackage) => (
                        <option key={dataPackage.id} value={dataPackage.id}>
                          {dataPackage.name} - &#x20A6;{dataPackage.amount}
                        </option>
                      ))}
                    </select>
                    <label>Select Data Plan</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="tel"
                      className="form-control"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="080********"
                      required=""
                    />
                    <label>Enter Mobile Number</label>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton
                disable={!canSubmit}
                onClick={buyData}
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
