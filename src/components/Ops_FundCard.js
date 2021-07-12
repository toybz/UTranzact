export default function FundCard() {

    return (
        <div className="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="fund-modal"
             tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header padding-l-20 padding-r-20 justify-content-center">
                        <div className="itemProduct_sm">
                            <h1 className="size-18 weight-600 color-secondary m-0">Fund Card</h1>
                        </div>
                        {/*here is close button */}
                        <div className="absolute right-0 padding-r-20">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <i className="tio-clear"></i>
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="padding-t-20">
                            <form action="#">

                                <div className="form-group input-lined">
                                    <select className="form-control custom-select">
                                        <option value="Default Account (**** 6540)">Default Account (****
                                            6540)
                                        </option>
                                        <option value="Saving Account (**** 0051)">Saving Account (**** 0051)
                                        </option>
                                        <option value="Bills Account (**** 1942)">Bills Account (**** 1942)
                                        </option>
                                        <option value="Business Account (****2297)">Business Account
                                            (****2297)
                                        </option>
                                    </select>
                                    <label>Choose The Card</label>
                                </div>

                                <div className="form-group input-lined relative">
                                    <input type="text" className="form-control" value="150" min="0"
                                           placeholder="000"
                                           required=""/>
                                    <label>Enter Amount</label>
                                    <span className="absolute right-0 top-0 mt-3 color-snow size-16">NGN</span>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal"
                                className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center">
                            Fund
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
