import Header from "../components/Header";
import Page from "./Page";
import { openFundCardModal } from "../components/Ops_FundCard";
import { Link } from "react-router-dom";
import { HISTORY_LINK } from "../constant/pageRoutes";
import {
  AirtimeMenuItem,
  DataMenuItem,
  PowerMenuItem,
  TransferMenuItem,
} from "../components/operationsMenuIcons";

import { BeatLoader } from "react-spinners";
import LoadingCard from "../components/LoadingCard";
import HistoryItem from "../components/HistoryItem";

import { useTransactions } from "../hooks/useTransactions";
import useWallet from "../hooks/useWallet";

function Dashboard() {
  const pageTitle = "Dashboard";

  const { wallets } = useWallet();

  // const { savedTransactions } = useSavedTransaction();

  let { recentTransactions } = useTransactions();

  const operationsList = [
    TransferMenuItem,
    AirtimeMenuItem,
    DataMenuItem,
    PowerMenuItem,
  ];

  const calculateTotalBalance = (prevItem, currentItem) =>
    prevItem + parseInt(currentItem.balance);

  const totalBalance = wallets
    ? wallets.reduce(calculateTotalBalance, 0)
    : null;

  return (
    <>
      <Page className={"bg-snow"}>
        <Header pageTitle={pageTitle} sticky={false} />

        <section className="banner__wallet">
          <div className="emhead d-flex align-items-center justify-content-between">
            <div className="item__total">
              <span>Total Balance</span>
              {totalBalance !== null ? (
                <h2>
                  {totalBalance}
                  <span> NGN</span>
                </h2>
              ) : (
                <BeatLoader
                  css={{ display: "flex !important" }}
                  color="white"
                />
              )}
            </div>
            <div className="side__right">
              <button
                type="button"
                className="btn btn_balance"
                onClick={() => openFundCardModal()}
              >
                + Add Balance
              </button>
            </div>
          </div>
        </section>

        <main className="main_Wallet_index">
          <section className="em__bkOperationsWallet">
            <div className="em__actions">
              {operationsList.map((Operation, index) => (
                <Operation key={index} />
              ))}
            </div>
          </section>

          <section className="padding-20 py-0">
            <div className="dividar" />
          </section>

          {/* Start emTransactions__page */}
          <section className="padding-20 emTransactions__page">
            <div className="title d-flex justify-content-between align-items-center padding-b-30">
              <h3 className="size-16 weight-600 color-secondary mb-1">
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
              {recentTransactions !== null ? (
                recentTransactions.length > 0 ? (
                  recentTransactions.map((transaction) => (
                    <HistoryItem
                      transaction={transaction}
                      key={transaction.id}
                    />
                  ))
                ) : (
                  <p>No Transaction</p>
                )
              ) : (
                <LoadingCard />
              )}
            </div>
          </section>

          {/* <section className="emWallet__stats padding-l-20 padding-r-20 padding-t-30">
            <div className="title d-flex justify-content-between align-items-center padding-b-30 horizontal-padding-20">
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
                {savedTransactions !== null ? (
                  savedTransactions.length ? (
                    savedTransactions.map((transaction) => (
                      <SavedTransactionItem
                        {...transaction}
                        key={transaction.id}
                      />
                    ))
                  ) : (
                    <p>No Saved Transaction</p>
                  )
                ) : (
                  <LoadingCard />
                )}
              </div>
            </div>
          </section>*/}

          {/* End. emTransactions__page */}
        </main>
      </Page>
    </>
  );
}

export default Dashboard;
