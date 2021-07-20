import Header from "../components/Header";
import useCarousel from "../hooks/useCarousel";
import Page from "./Page";
import {useEffect, useMemo, useState} from "react";
import FundCard, {openFundCardModal} from "../components/Ops_FundCard";
import {Link} from "react-router-dom";
import {HISTORY_LINK, SAVED_TRANSACTIONS} from "../helpers/links";
import TransactionDetail, {
  openTransactionDetailModal, setTransactionDetailData,
  useTransactionDetailsModal,
} from "../components/TransactionDetails";
import OperationItem from "../components/OperationItem";
import {
  AirtimeMenuItem, DataMenuItem,
  FundCardMenuItem,
  QrPayMenuItem,
  TransferMenuItem,
} from "../components/operationsMenuIcons";
import Transfer from "../components/Ops_Transfer";
import BuyAirtime from "../components/Ops_BuyAirtime";
import QrPay from "../components/Ops_QrPay";
import SavedTransactionItem from "../components/SavedTransactionItem";
import {useSavedTransactionModal} from "../hooks/useModals";

import demoData from "../dummy_data";
import {useDispatch} from "react-redux";
import {updateTransactionDetails} from "../store/modals/transactionDetails";
import {FUNDING, PAYMENT, TRANSFER} from "../helpers/transactionCategories";
import Skeleton from "react-loading-skeleton";
import {BarLoader, BeatLoader, PulseLoader} from "react-spinners";
import LoadingCard from "../components/LoadingCard";


function Dashboard() {
  useCarousel(".owl-carousel ");

  const pageTitle = "Dashboard";

  const [totalBalance, setTotalBalance] = useState(null);

  const [savedTransactions, setSavedTransactions] = useState([]);

  const [recentTransactions, setRecentTransactions] = useState([]);


  const dispatch = useDispatch()

  const updateTotalBalance = (amount) => {
    setTotalBalance(amount);
  };
  const updateSavedTransactions = (actions) => {
    setSavedTransactions(actions);
  };
  const updateRecentTransactions = (transactions) => {
    setRecentTransactions(transactions);
  };

  useEffect(() => {
    setTimeout(() => {
      const {
        totalBalance: tBalance,
        savedTransactions: sTransactions,
        recentTransactions: recTransactions,
      } = demoData;

      updateTotalBalance(tBalance);
      updateSavedTransactions(sTransactions);
      updateRecentTransactions(recTransactions);
    },5000);
  }, []);

  const operationsList = useMemo(
      () => [TransferMenuItem, DataMenuItem, AirtimeMenuItem, FundCardMenuItem],
      []
  );

  return (
      <>
        <Page className={"bg-snow"}>
          <Header pageTitle={pageTitle} sticky={false}/>

          <section className="banner__wallet">
            <div className="emhead d-flex align-items-center justify-content-between">
              <div className="item__total">
                <span>Total Balance</span>
                { totalBalance ?  <h2> {totalBalance}
                      <span> NGN</span>
                    </h2> : <BeatLoader css={{display: 'flex !important'}}  color="white" />}



                }
              </div>
              <div className="side__right">
                <button
                    type="button"
                    className="btn btn_balance"
                    onClick={()=> openFundCardModal()}
                >
                  + Add Balance
                </button>
              </div>
            </div>
          </section>

          <main className="main_Wallet_index">
            <section className="em__bkOperationsWallet">
              <div className="em__actions">
                {operationsList.map((Operation) => (
                    <Operation/>
                ))}


              </div>
            </section>

            {/* Start dividar */}
            <section className="padding-20 py-0">
              <div className="dividar"></div>
            </section>
            {/* End. dividar */}

            {/* Start emWallet__stats */}
            <section className="emWallet__stats padding-l-20 padding-r-20 padding-t-30">
              <div
                  className="title d-flex justify-content-between align-items-center padding-b-30 horizontal-padding-20">
                <h2 className="size-16 weight-500 color-secondary mb-1">
                  Saved Transactions
                </h2>
                <Link
                    to={SAVED_TRANSACTIONS}
                    className="d-block color-blue size-14 m-0 hover:color-blue"
                >
                  View all
                </Link>
              </div>

              <div className="emPage__billsWallet horizontal-padding-20 py-0">
                <div className="emBk__bills">

       { !savedTransactions.length &&  <LoadingCard />
                  }

                  {savedTransactions.map((transaction) => (
                      <SavedTransactionItem
                          {...transaction}
                      />
                  ))}
                </div>
              </div>
            </section>
            {/* End. emWallet__stats */}

            {/* Start emTransactions__page */}
            <section className="padding-20 emTransactions__page">
              <div className="title d-flex justify-content-between align-items-center padding-b-30">
                <h3 className="size-16 weight-500 color-secondary mb-1">
                  Recent Transactions
                </h3>
                <Link
                    to={HISTORY_LINK}
                    className="d-block color-blue size-14 m-0 hover:color-blue"
                >
                  View all
                </Link>
              </div>

              <div className="emBK__transactions">
   { !recentTransactions.length && <LoadingCard /> }

                {recentTransactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="item_trans"
                        /*  data-toggle="modal"
                                                data-target="#transaction_detail_modal"*/
                        onClick={() => {  dispatch(updateTransactionDetails(transaction));openTransactionDetailModal(transaction) }}
                    >
                      <div className="media sideLeft">
                        <div className="icon_img bg-pink">

   {transaction.benefactor.accountProvider.image ?  <img
             src={transaction.benefactor.accountProvider.image}
                              alt="Provider image"/> :   <p className="color-white">{transaction.benefactor.accountProvider.name.slice(0,2)}</p> }





                        </div>


                        <div className="media-body my-auto">
                          <h4>{transaction.benefactor.name || transaction.benefactor.destinationId }</h4>
      <p> {
        transaction.category === TRANSFER  && `Transfer to ${transaction.benefactor.accountProvider.name}`
      }

        {
          transaction.category === PAYMENT  && `Payment for ${transaction.benefactor.accountProvider.name} - ${transaction.meta.paymentItemName}`
        }

        {
          transaction.category === FUNDING  && `Wallet Funding`
        }

      </p>



                        </div>
                      </div>
                      <div className="sideRight">
                        <p>
                          {transaction.amount} <span>NGN</span>
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </section>
            {/* End. emTransactions__page */}
          </main>


        </Page>
      </>
  );
}

export default Dashboard;
