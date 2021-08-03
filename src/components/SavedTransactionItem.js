import {openConfirmTransactionModal} from "./modals/ConfirmTransaction";
import {useDispatch} from "react-redux";

import {FUNDING, PAYMENT, TRANSFER} from "../helpers/transactionCategories";
import {updateTransactionDetails} from "../store/modals/transactionDetails";


export default function SavedTransactionItem(props) {

  const {transaction,title} = props

    const {amount, benefactor } = transaction


    const dispatch = useDispatch()

    const showConfirmModal = () => {

        dispatch(updateTransactionDetails(transaction))

        openConfirmTransactionModal()

    }


    return (
        <>
            <div className="item">
                <div className="emhead_w">
                    <div className="icon_img">
                        <img
                            src={benefactor?.image || "/assets/img/persons/envato-logo-blue-black.png"}
                            alt=""/>
                    </div>
                    <button className="btn btn_default bg-primary" onClick={() => showConfirmModal(transaction)}>Pay Now
                    </button>
                </div>
                <div className="embody_w">
                    <div className="details_w">
                        <p className="padding-0 margin-0">{title}</p>

                        <span> {
                            transaction.category === TRANSFER  && `Transfer to ${transaction.benefactor.accountProvider.name}`
                        }

                            {
                                transaction.category === PAYMENT  && `Payment for ${transaction.benefactor.accountProvider.name} - ${transaction.meta.paymentItemName}`
                            }

                            {
                                transaction.category === FUNDING  && `Wallet Funding`
                            }

                        </span>

                        <span>{transaction.benefactor.name || transaction.benefactor.destinationId }</span>
                    </div>
                    <div className="price">
                        <p> {amount} <span>NGN</span></p>
                    </div>
                </div>
            </div>

        </>
    )

}
