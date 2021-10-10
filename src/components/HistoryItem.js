import { updateTransactionDetails } from "../store/modals/transactionDetails";
import { openTransactionDetailModal } from "./TransactionDetails";

import { useDispatch } from "react-redux";
import {
  AIRTIME,
  DATA,
  ELECTRICITY,
  FUNDING,
  PAY_TV,
  PAYMENT,
  TRANSFER,
} from "../constant/transactionCategories";

export default function HistoryItem({ transaction }) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="item_trans"
        onClick={() => {
          dispatch(updateTransactionDetails(transaction));
          openTransactionDetailModal(transaction);
        }}
      >
        <div className="media sideLeft">
          {transaction.subCategory === AIRTIME && (
            <div
              className="icon_img icon bg-opacity-10"
              style={{ background: "#fef5e6" }}
            >
              <i
                className={"ri-phone-line menu_icon"}
                style={{ color: "#f79908" }}
              />
            </div>
          )}

          {transaction.subCategory === DATA && (
            <div
              className="icon_img icon bg-opacity-10"
              style={{ background: "#fef0e9" }}
            >
              <i
                className={"ri-global-line menu_icon"}
                style={{ color: "#f79665" }}
              />
            </div>
          )}

          {transaction.category === TRANSFER && (
            <div
              className="icon_img icon bg-opacity-10"
              style={{ background: "#ecf8f2" }}
            >
              <i
                className={"ri-send-plane-fill menu_icon"}
                style={{ color: "#42bd83" }}
              />
            </div>
          )}

          {transaction.subCategory === PAY_TV && (
            <div
              className="icon_img icon bg-opacity-10"
              style={{ background: "#f0edff" }}
            >
              <i
                className={"ri-tv-line menu_icon"}
                style={{ color: "#baacfe" }}
              />
            </div>
          )}

          {transaction.subCategory === ELECTRICITY && (
            <div
              className="icon_img icon bg-opacity-10"
              style={{ background: "#fdecec" }}
            >
              <i
                className={"ri-lightbulb-flash-line menu_icon"}
                style={{ color: "#f44041" }}
              />
            </div>
          )}

          <div className="media-body my-auto">
            <h4>
              {transaction.benefactor.name ||
                transaction.benefactor.destinationId}
            </h4>
            <p>
              {transaction.category === TRANSFER &&
                `Transfer to ${transaction.benefactor.accountProvider.name}`}
              {transaction.category === PAYMENT &&
                `Payment for ${transaction.subCategory} `}
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
