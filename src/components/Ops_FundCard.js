import {useRef, useState} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {USER_WALLETS} from "../urls";
import {useFetchUserWallets} from "../hooks/useRequests";
import OpsSubmitButton from "./OpsSubmitButton";
import SelectPaymentMethod, {openSelectPaymentMethodModal} from "./SelectPaymentMethod";


export const MODAL_ID = "fund_card_modal";

export const openFundCardModal = () => {
    document.jQuery(`#${MODAL_ID}`).modal({})
}

export default function FundCard() {

    const [accounts, setAccounts] = useState([])

    const amountInput = useRef("0")

    const {status, data: userWallets, error, isFetching} = useFetchUserWallets()


    const [isProcessing, setIsProcessing] = useState(false)


    const submit = (event) => {
        event.preventDefault()
        setIsProcessing(true)

        setTimeout(()=> setIsProcessing(false) , 5000)


        openSelectPaymentMethodModal()

        const data = {
            walletId: userWallets.id,
            amount: amountInput.current.value
        }
        console.log("submitting", data)

    }


    return (
        <>
            <div className="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id={MODAL_ID}
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


                                            {
                                                userWallets && userWallets.map((wallet) =>
                                                    <option
                                                        value={wallet.id}> {`${wallet.name} (**** ${wallet.balance} )`} </option>
                                                )
                                            }


                                        </select>
                                        <label>Choose The Card</label>
                                    </div>

                                    <div className="form-group input-lined relative">
                                        <input type="text" ref={amountInput} className="form-control" min="0"
                                               placeholder="000"
                                               required=""/>
                                        <label>Enter Amount</label>
                                        <span className="absolute right-0 top-0 mt-3 color-snow size-16">NGN</span>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">

                            {/*  <button type="button" onClick={submit} className="btn btn-"
                                    className="btn w-100 bg-primary m-0 color-white h-52 d-flex align-items-center rounded-8 justify-content-center" disabled>
                                Fund   &nbsp;&nbsp;

                                <span>
                                     <span className="spinner-border spinner-border-sm color-white" role="status"
                                           aria-hidden="true"> </span>

                                    &nbsp;&nbsp; Processing...

                                </span>


                            </button>*/}

                            <OpsSubmitButton onClick={submit} text='Fund' isProcessing={isProcessing} />



                        </div>
                    </div>
                </div>
            </div>



            <SelectPaymentMethod />


        </>

    )
}
