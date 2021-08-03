import {useRef} from "react";
import {useFetchUserWallets, useUpdateWallet} from "../hooks/useRequests";
import OpsSubmitButton from "./OpsSubmitButton";
import SelectPaymentMethod from "./SelectPaymentMethod";

export const MODAL_ID = "fund_card_modal";

export const openFundCardModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function FundCard() {


  const amountInput = useRef("0");
  const selectedWallet = useRef("");

  const {
    data: userWallets,
    isFetching: isFetchingUserWallets,
    refetch: reFetchWallets,
  } = useFetchUserWallets();

  const { updateWallet } = useUpdateWallet();
  const submit = () => {
    // openSelectPaymentMethodModal();
    const amount = parseInt(amountInput.current.value);
    const selectedWalletId = selectedWallet.current.value;

    const selectedWalletIndex = userWallets.findIndex(
      (wallet) => wallet.id === selectedWalletId
    );

    let newWallets = [...userWallets];
    newWallets[selectedWalletIndex].balance =
      parseInt(newWallets[selectedWalletIndex].balance) + amount;

    updateWallet(newWallets).then(() => {
      reFetchWallets();
    });
  };

  return (
    <>
      <div
        className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
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
                  Fund Card
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
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group input-lined">
                    <select
                      className="form-control custom-select"
                      ref={selectedWallet}
                    >
                      {
                        isFetchingUserWallets  && (<option disabled>Please wait....</option>) }
                      {userWallets &&
                        userWallets.map((wallet) => (
                        <option value={wallet.id} key={wallet.id}>
                            {`${wallet.name} - (${wallet.balance} NGN)`}
                          </option>
                        ))}
                    </select>
                    <label>Choose The Card</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="text"
                      ref={amountInput}
                      className="form-control"
                      min="0"
                      placeholder="000"
                      required=""
                    />
                    <label>Enter Amount</label>
                    <span className="absolute right-0 top-0 mt-3 color-snow size-16">
                      NGN
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <OpsSubmitButton onClick={submit} text="Fund" />
            </div>
          </div>
        </div>
      </div>

      <SelectPaymentMethod />
    </>
  );
}
