import Header from "../components/Header";
import useCarousel from "../hooks/useCarousel";
import Page from "./Page";
import {useEffect, useState} from "react";
import {openFundCardModal} from "../components/Ops_FundCard";
import {Link} from "react-router-dom";
import {HISTORY_LINK, SAVED_TRANSACTIONS} from "../helpers/links";
import {AirtimeMenuItem, DataMenuItem, FundCardMenuItem, TransferMenuItem,} from "../components/operationsMenuIcons";
import SavedTransactionItem from "../components/SavedTransactionItem";
import {useDispatch} from "react-redux";

import {BeatLoader} from "react-spinners";
import LoadingCard from "../components/LoadingCard";
import {useFetchRecentTransactions, useFetchSavedTransactions, useFetchUserWallets,} from "../hooks/useRequests";
import HistoryItem from "../components/HistoryItem";

function Dashboard() {
  useCarousel(".owl-carousel ");

  const pageTitle = "Dashboard";
  const dispatch = useDispatch();

  const [totalBalance, setTotalBalance] = useState(0);

  const { data: userWallets, isFetchingWallets } = useFetchUserWallets();
  const { data: savedTransactions } = useFetchSavedTransactions();
  const { data: recentTransactions } = useFetchRecentTransactions();

  useEffect(() => {
    let balance = 0;
    if (!isFetchingWallets && userWallets && userWallets[0].balance) {
      userWallets.map((wallet) => {
        balance += parseInt(wallet.balance);
      });
    }
    console.log({ balance });
    setTotalBalance(balance);
  }, [JSON.stringify(userWallets)]);

/*  const operationsList = useMemo(
    () => [TransferMenuItem, DataMenuItem, AirtimeMenuItem, FundCardMenuItem],
    []
  );*/
  const operationsList = [TransferMenuItem, DataMenuItem, AirtimeMenuItem, FundCardMenuItem]
  return (
    <>
      <Page className={"bg-snow"}>



        <Header pageTitle={pageTitle} sticky={false} />

        <section className="banner__wallet">
          <div className="emhead d-flex align-items-center justify-content-between">
            <div className="item__total">
              <span>Total Balance</span>
              {userWallets ? (
                <h2>
                  {/*  {userWallets[0].balance}*/}
                  {totalBalance}
                  <span> NGN</span>
                </h2>
              ) : (
                <BeatLoader
                  css={{ display: "flex !important" }}
                  color="white"
                />
              )}
              }
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

          {/* Start dividar */}
          <section className="padding-20 py-0">
            <div className="dividar"/>
          </section>
          {/* End. dividar */}

          {/* Start emWallet__stats */}
          <section className="emWallet__stats padding-l-20 padding-r-20 padding-t-30">
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
                {savedTransactions ? (
                  savedTransactions.map((transaction) => (
                    <SavedTransactionItem {...transaction} key={transaction.id} />
                  ))
                ) : (
                  <LoadingCard />
                )}
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
              {recentTransactions ? (
                recentTransactions.map((transaction) => (
                <HistoryItem transaction={transaction} key={transaction.id} />
                ))
              ) : (
                <LoadingCard />
              )}
            </div>
          </section>
          {/* End. emTransactions__page */}
        </main>


      </Page>
    </>
  );
}

export default Dashboard;
