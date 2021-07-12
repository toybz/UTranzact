import {openConfirmTransactionModal} from "./modals/ConfirmTransaction";
import {useDispatch} from "react-redux";
import {update} from "../store/modals/savedTransaction";


export default function SavedTransactionItem(props) {

    const {transactionId, receiver, title, description, amount} = props
    const dispatch = useDispatch()

    const showConfirmModal = (transactionDetails) => {

        dispatch(update(transactionDetails))

        openConfirmTransactionModal()

    }


    return (
        <>
            <div className="item">
                <div className="emhead_w">
                    <div className="icon_img">
                        <img
                            src={receiver?.image || "/assets/img/persons/envato-logo-blue-black.png"}
                            alt=""/>
                    </div>
                    <button className="btn btn_default bg-primary" onClick={() => showConfirmModal(props)}>Pay Now
                    </button>
                </div>
                <div className="embody_w">
                    <div className="details_w">
                        <h3>{title}</h3>
                        <span>{description}</span>
                    </div>
                    <div className="price">
                        <p> {amount} <span>NGN</span></p>
                    </div>
                </div>
            </div>

        </>
    )

}
