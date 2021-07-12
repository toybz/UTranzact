import {useState} from "react";

const MODAL_ID = 'transaction_detail_modal'

export function useTransactionDetailsModal() {

    const [transactionDetails, setTransactionDetails] = useState(null)

    const openTransactionDetailModal = (details) => {

        setTransactionDetails((oldValue) => {
            return {...oldValue, ...details}
        })
        document.jQuery(`#${MODAL_ID}`).modal({})

    }

    return {

        transactionDetails, openTransactionDetailModal
    }
}


export default function TransactionDetail({status, receiver, category, date, description, amount}) {

    return (

        <>

            <div className="modal transition-bottom screenFull defaultModal details__transaction mdlladd__rate fade"
                 id={MODAL_ID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0 padding-l-20 padding-r-20 justify-content-center">
                            <div className="itemProduct_sm">
                                <h1 className="size-18 weight-600 color-secondary m-0">Payment Sent</h1>
                            </div>
                            <div className="absolute right-0 padding-r-20">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="tio-clear"></i>
                                </button>
                            </div>
                            <div className="icon absolute left-0 padding-l-20">
                                <button type="button" className="btn p-0">
                                    <svg id="Iconly_Two-tone_Delete" data-name="Iconly/Two-tone/Delete"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g id="Delete" transform="translate(3 2)">
                                            <path id="Stroke_1" data-name="Stroke 1"
                                                  d="M14.191,0s-.543,6.735-.858,9.572a2.238,2.238,0,0,1-2.358,2.174c-2.609.047-5.221.05-7.829-.005A2.214,2.214,0,0,1,.857,9.579C.54,6.717,0,0,0,0"
                                                  transform="translate(2.134 7.468)" fill="none" stroke="#ff3f3f"
                                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                  stroke-width="1.5" opacity="0.4"/>
                                            <path id="Stroke_3" data-name="Stroke 3" d="M16.958.5H0"
                                                  transform="translate(0.75 3.74)" fill="none" stroke="#ff3f3f"
                                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                  stroke-width="1.5"/>
                                            <path id="Stroke_5" data-name="Stroke 5"
                                                  d="M10.423,3.489A1.648,1.648,0,0,1,8.808,2.165L8.565.949A1.28,1.28,0,0,0,7.328,0H3.1A1.28,1.28,0,0,0,1.858.949L1.615,2.165A1.648,1.648,0,0,1,0,3.489"
                                                  transform="translate(4.018 0.751)" fill="none" stroke="#ff3f3f"
                                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                                  stroke-width="1.5"/>
                                        </g>
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div className="modal-body px-0">

                            <div className="bk_check">
                                { /*
                        You can change between the three classes
                         sent
                         withdraw
                         Exchange
                      */}
                                <div className="icon sent">
                                    <svg id="Iconly_Bulk_Send" data-name="Iconly/Bulk/Send"
                                         xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                        <g id="Send" transform="translate(1.833 1.833)">
                                            <path id="Fill_1" data-name="Fill 1"
                                                  d="M17.808.53A1.777,1.777,0,0,0,16.039.072L1.29,4.333A1.754,1.754,0,0,0,.022,5.718,2.049,2.049,0,0,0,.941,7.634L5.553,10.45a1.2,1.2,0,0,0,1.475-.175l5.281-5.281a.674.674,0,0,1,.972,0,.692.692,0,0,1,0,.972L7.99,11.247a1.2,1.2,0,0,0-.177,1.475l2.818,4.629a1.835,1.835,0,0,0,1.751.852,1.782,1.782,0,0,0,1.494-1.265L18.248,2.3A1.781,1.781,0,0,0,17.808.53"
                                                  transform="translate(0 0)" fill="#25c998"/>
                                            <path id="Combined_Shape" data-name="Combined Shape"
                                                  d="M4.367,6.99a.688.688,0,0,1,0-.972L5.619,4.766a.688.688,0,1,1,.973.973L5.339,6.99a.687.687,0,0,1-.972,0ZM3.649,3.518a.688.688,0,0,1,0-.972L4.9,1.294a.688.688,0,0,1,.973.973L4.621,3.518a.687.687,0,0,1-.972,0ZM.2,2.425a.688.688,0,0,1,0-.972L1.453.2a.688.688,0,1,1,.973.973L1.173,2.425a.687.687,0,0,1-.972,0Z"
                                                  transform="translate(0.239 10.948)" fill="#25c998" opacity="0.4"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>

                            <table className="table table-striped">
                                <tbody>
                                <tr>
                                    <td><span>Status</span></td>
                                    <td><span className="success">{status}</span></td>
                                </tr>
                                <tr>
                                    <td><span>To</span></td>
                                    <td><span>{receiver?.name}</span></td>
                                </tr>
                                <tr>
                                    <td><span>Bank Name</span></td>
                                    <td><span>{receiver?.accountNumber}</span></td>
                                </tr>

                                <tr>
                                    <td><span>Account Number</span></td>
                                    <td><span>{receiver?.accountNumber}</span></td>
                                </tr>


                                <tr>
                                    <td><span>Transaction Category</span></td>
                                    <td><span>{category}</span></td>
                                </tr>
                                {/* <tr>
                                    <td><span>Receipt</span></td>
                                    <td><span>Yes</span></td>
                                </tr>*/}
                                <tr>
                                    <td><span>Date</span></td>
                                    <td><span>{date}</span></td>
                                </tr>
                                <tr>
                                    <td><span>Amount</span></td>
                                    <td><span className="weight-500 size-15">{amount} </span><span
                                        className="size-12">NGN</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td><span>Description</span></td>
                                    <td><span>{description}</span></td>
                                </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )


}
