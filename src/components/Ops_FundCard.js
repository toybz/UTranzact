import { useFetchUserWallets } from "../hooks/useRequests";
import OpsSubmitButton from "./OpsSubmitButton";
import SelectPaymentMethod, {
  openSelectPaymentMethodModal,
} from "./SelectPaymentMethod";
import { useDispatch, useSelector } from "react-redux";
import { setFundCard } from "../store/fundCard";
import {showToast} from "../helpers/Utils";

export const MODAL_ID = "fund_card_modal";

export const openFundCardModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function FundCard() {
  const dispatch = useDispatch();
  const { amount, selectedWalletId } = useSelector((store) => store.fundCard);

  const updateFundCardData = (key, value) => {
    dispatch(
      setFundCard({
        amount,
        selectedWalletId,
        [key]: value,
      })
    );
  };
  const { data: userWallets, isFetching: isFetchingUserWallets } =
    useFetchUserWallets();

  const disableSubmit =  (!parseInt(amount) || !selectedWalletId)

  const submit = () => {
    if (disableSubmit) {
       showToast("Please select target wallet and amount to fund", "warning");

       return
    }
    openSelectPaymentMethodModal();
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
                      value={selectedWalletId}
                      onChange={(e) =>
                        updateFundCardData("selectedWalletId", e.target.value)
                      }
                    >
                      {isFetchingUserWallets && (
                        <option disabled>Please wait....</option>
                      )}
                      {userWallets && (
                        <>
                          <option value={""}>Select</option>

                          {userWallets.map((wallet) => (
                            <option value={wallet.id} key={wallet.id}>
                              {`${wallet.name} - (${wallet.balance} NGN)`}
                            </option>
                          ))}
                        </>
                      )}
                    </select>
                    <label>Choose The Card</label>
                  </div>

                  <div className="form-group input-lined relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) =>
                        updateFundCardData("amount", e.target.value)
                      }
                      className="form-control"
                      min="0"
                      placeholder="000"
                      required
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
              <OpsSubmitButton disable={disableSubmit} onClick={submit} text="Fund" />
            </div>
          </div>
        </div>
      </div>

      <SelectPaymentMethod />
    </>
  );
}
