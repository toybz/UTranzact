import { showToast } from "../helpers/Utils";

const MODAL_ID = "qr_modal";

export const openQrPayModal = () => {
  // document.jQuery(`#${MODAL_ID}`).modal({})
  showToast("Coming Soon", "info");
};

export default function QrPay() {
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
                QR Payment
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
                  <select className="form-control custom-select">
                    <option value="Bills Account (**** 1942)">
                      Bills Account (**** 1942)
                    </option>
                    <option value="Default Account (**** 6540)">
                      Default Account (**** 6540)
                    </option>
                    <option value="Saving Account (**** 0051)">
                      Saving Account (**** 0051)
                    </option>
                    <option value="Business Account (****2297)">
                      Business Account (****2297)
                    </option>
                  </select>
                  <label>Choose The Card</label>
                </div>

                <div className="form-group input-lined">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                    required=""
                  />
                  <label>Receiver Email</label>
                </div>

                <div className="form-group input-lined relative">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="150"
                    min="0"
                    placeholder="John Smith"
                    required=""
                  />
                  <label>Enter Amount</label>
                  <span className="absolute right-0 top-0 mt-3 color-snow size-16">
                    USD
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#mdllConfirm-transfer"
              className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center"
            >
              Send!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
