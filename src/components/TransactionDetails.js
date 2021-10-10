import { useSelector } from "react-redux";
import {
  BANK_TRANSFER,
  FUNDING,
  PAYMENT,
  STATUS_FAILED,
  STATUS_PENDING,
  STATUS_SUCCESSFUL,
  TRANSFER,
} from "../constant/transactionCategories";
import { parseDate } from "../helpers/Utils";

const MODAL_ID = "transaction_detail_modal";

export const openTransactionDetailModal = () => {
  document.jQuery(`#${MODAL_ID}`).modal({});
};

export default function TransactionDetail() {
  const {
    status,
    category,
    subCategory,
    amount,
    dateTime,
    benefactor,
    debitWallet,
    meta,
  } = useSelector((store) => store.transactionDetails);

  // console.log({TransactionDetail})

  return (
    <>
      <div
        className="modal transition-bottom screenFull defaultModal details__transaction mdlladd__rate fade"
        id={MODAL_ID}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 padding-l-20 padding-r-20 justify-content-center">
              <div className="itemProduct_sm">
                {category === PAYMENT && status === STATUS_SUCCESSFUL && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Payment Successful
                  </h1>
                )}
                {category === PAYMENT && status === STATUS_PENDING && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Payment Pending
                  </h1>
                )}
                {category === PAYMENT && status === STATUS_FAILED && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Payment Failed
                  </h1>
                )}

                {category === TRANSFER && status === STATUS_SUCCESSFUL && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Transfer Successful
                  </h1>
                )}

                {category === TRANSFER && status === STATUS_PENDING && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Transfer is Processing
                  </h1>
                )}
                {category === TRANSFER && status === STATUS_FAILED && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Transfer Failed
                  </h1>
                )}

                {category === FUNDING && status === STATUS_SUCCESSFUL && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Funding Successful
                  </h1>
                )}

                {category === FUNDING && status === STATUS_PENDING && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Funding Processing
                  </h1>
                )}
                {category === FUNDING && status === STATUS_FAILED && (
                  <h1 className="size-18 weight-600 color-secondary m-0">
                    Funding Failed
                  </h1>
                )}
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
              <div className="icon absolute left-0 padding-l-20">
                {/*  <button type="button" className="btn p-0">
                  Share
                </button>*/}
              </div>
            </div>
            <div className="modal-body px-0">
              <div className="bk_check">
                {/*
                        You can change between the three classes
                         sent
                         withdraw
                         Exchange
                      */}
                <div className="icon sent">
                  <svg
                    id="Iconly_Bulk_Send"
                    data-name="Iconly/Bulk/Send"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                  >
                    <g id="Send" transform="translate(1.833 1.833)">
                      <path
                        id="Fill_1"
                        data-name="Fill 1"
                        d="M17.808.53A1.777,1.777,0,0,0,16.039.072L1.29,4.333A1.754,1.754,0,0,0,.022,5.718,2.049,2.049,0,0,0,.941,7.634L5.553,10.45a1.2,1.2,0,0,0,1.475-.175l5.281-5.281a.674.674,0,0,1,.972,0,.692.692,0,0,1,0,.972L7.99,11.247a1.2,1.2,0,0,0-.177,1.475l2.818,4.629a1.835,1.835,0,0,0,1.751.852,1.782,1.782,0,0,0,1.494-1.265L18.248,2.3A1.781,1.781,0,0,0,17.808.53"
                        transform="translate(0 0)"
                        fill="#25c998"
                      />
                      <path
                        id="Combined_Shape"
                        data-name="Combined Shape"
                        d="M4.367,6.99a.688.688,0,0,1,0-.972L5.619,4.766a.688.688,0,1,1,.973.973L5.339,6.99a.687.687,0,0,1-.972,0ZM3.649,3.518a.688.688,0,0,1,0-.972L4.9,1.294a.688.688,0,0,1,.973.973L4.621,3.518a.687.687,0,0,1-.972,0ZM.2,2.425a.688.688,0,0,1,0-.972L1.453.2a.688.688,0,1,1,.973.973L1.173,2.425a.687.687,0,0,1-.972,0Z"
                        transform="translate(0.239 10.948)"
                        fill="#25c998"
                        opacity="0.4"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>
                      <span>Status</span>
                    </td>
                    <td>
                      <span className="success">{status}</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>Amount</span>
                    </td>
                    <td>
                      <span className="weight-500 size-15">{amount} </span>
                      <span className="size-12">NGN</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Category</span>
                    </td>
                    <td>
                      <span>{category}</span>
                    </td>
                  </tr>
                  {category === PAYMENT && meta?.paymentItemName && (
                    <tr>
                      <td>
                        <span>Package name</span>
                      </td>
                      <td>
                        <span>{meta.paymentItemName}</span>
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td>
                      <span>Benefactor</span>
                    </td>
                    <td>
                      <span>{benefactor.name || benefactor.destinationId}</span>
                    </td>
                  </tr>

                  {subCategory === BANK_TRANSFER && (
                    <>
                      <tr>
                        <td>
                          <span> Bank </span>
                        </td>
                        <td>
                          <span>{benefactor.accountProvider.name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span> Account No. </span>
                        </td>
                        <td>
                          <span>{benefactor.destinationId}</span>
                        </td>
                      </tr>
                    </>
                  )}

                  <tr>
                    <td>
                      <span>Debit Wallet</span>
                    </td>
                    <td>
                      <span>{debitWallet?.name}</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>Date</span>
                    </td>
                    <td>
                      <span>{parseDate(dateTime)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
