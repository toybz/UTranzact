import { showToast } from "../helpers/Utils";
import { useState } from "react";

const MODAL_ID = "request_modal";

export const openRequestFundModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function RequestFunds() {
  const sendRequest = () => {
    showToast("Request Sent Successfully", "success");
  };

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const canSubmit = email && amount;

  return (
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
                Request
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
                <div className="form-group input-lined">
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="user@mail.com"
                    required=""
                  />
                  <label>Receiver Email</label>
                </div>

                <div className="form-group input-lined relative">
                  <input
                    type="text"
                    className="form-control"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    placeholder="1000"
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
            <button
              type="button"
              data-dismiss="modal"
              className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center"
              onClick={sendRequest}
              disabled={!canSubmit}
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
