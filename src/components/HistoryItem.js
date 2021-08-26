import { updateTransactionDetails } from "../store/modals/transactionDetails";
import { openTransactionDetailModal } from "./TransactionDetails";
import { FUNDING, PAYMENT, TRANSFER } from "../helpers/transactionCategories";

import { useDispatch } from "react-redux";

export default function HistoryItem({ transaction }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        key={transaction.id}
        className="item_trans"
        onClick={() => {
          dispatch(updateTransactionDetails(transaction));
          openTransactionDetailModal(transaction);
        }}
      >
        <div className="media sideLeft">
          <div className="icon_img bg-pink">
            {transaction.benefactor.accountProvider.image ? (
              <img
                src={transaction.benefactor.accountProvider.image}
                alt="Provider icon"
              />
            ) : (
              <p className="color-white">
                {transaction.benefactor.name.slice(0, 2)}
              </p>
            )}
          </div>

          <div className="media-body my-auto">
            <h4>
              {transaction.benefactor.name ||
                transaction.benefactor.destinationId}
            </h4>
            <p>
              {" "}
              {transaction.category === TRANSFER &&
                `Transfer to ${transaction.benefactor.accountProvider.name}`}
              {transaction.category === PAYMENT &&
                `Payment for ${transaction.benefactor.accountProvider.name} - ${transaction.meta.paymentItemName}`}
              {transaction.category === FUNDING && `Wallet Funding`}
            </p>
          </div>
        </div>
        <div className="sideRight">
          <p>
            {transaction.amount} <span>NGN</span>
          </p>
        </div>
      </div>
    </>
  );
}
