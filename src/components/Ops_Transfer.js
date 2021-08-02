
const MODAL_ID = "transfer_modal";

export const openTransferModal = () => {
    document.jQuery(`#${MODAL_ID}`).modal({})
}

export default function Transfer() {
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
                                    Transfer
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
                                    <i className="tio-clear"/>
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
                                        <label>Choose Debit Card</label>
                                    </div>

                                    <div className="form-group input-lined">
                                        <select className="form-control custom-select">
                                            <option value="Bills Account (**** 1942)">GTB</option>
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
                                        <label>Choose Bank</label>
                                    </div>

                                    <div className="form-group input-lined">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="000923100"
                    required=""
                                        />
                                        <label>Account Number</label>
                                    </div>

                                    <div className="form-group input-lined relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue=""
                                            min="0"
                                            placeholder="0000"
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
                                data-toggle="modal"
                                data-target="#confirm-transfer-modal"
                                className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Modal confirm__transfer */}
            <div
                className="modal transition-bottom screenFull defaultModal confirm__transfer mdlladd__rate fade"
                id="confirm-transfer-modal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header padding-l-20 padding-r-20 justify-content-center">
                            <div className="itemProduct_sm">
                                <h1 className="size-18 weight-600 color-secondary m-0">
                                    Confirm Transfer
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
                                        150.00 <span>USD</span>
                                    </h3>
                                    <p>Amount</p>
                                </div>
                                <div className="bk__convPersons emBK__transactions">
                                    <div className="item_trans">
                                        <div className="media sideLeft">
                                            <div className="icon_img bg-pink">
                                                <p className="color-white">k</p>
                                            </div>
                                            <div className="media-body my-auto">
                                                <h4>Kisha Vanhorn</h4>
                                                <p>Sender</p>
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
                                            <div className="icon_img">
                                                <img src="assets/img/persons/01.png" alt=""/>
                                            </div>
                                            <div className="media-body my-auto">
                                                <h4>Adam J. Staley</h4>
                                                <p>Recipient</p>
                                            </div>
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
                                <p className="color-text size-13 text-center mb-0">
                                    You are sending{" "}
                                    <span className="color-secondary">150.00 USD</span> to Adam.
                                </p>
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

            {/*Modal confirm__transfer */}
        </>
    );
}
