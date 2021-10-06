import Header from "../components/Header";
import Page from "./Page";
import { useTransactions } from "../hooks/useTransactions";
import HistoryItem from "../components/HistoryItem";
import { useEffect, useState } from "react";

const arrangeHistoryByDate = (historyItems) => {
  let arrangedHistory = {};

  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentDateString =
    currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

  historyItems.forEach((element) => {
    let dateTime = new Date(element.dateTime);
    const transactionDayOfMonth = dateTime.getDate();
    const transactionMonth = dateTime.getMonth();
    const transactionYear = dateTime.getFullYear();

    let transactionDateString =
      transactionDayOfMonth +
      "-" +
      (transactionMonth + 1) +
      "-" +
      transactionYear;

    let transactionDate = transactionDateString;

    if (transactionDateString === currentDateString) {
      transactionDate = "Today";
    }

    if (
      currentYear === transactionYear &&
      currentMonth === transactionMonth &&
      currentDayOfMonth - transactionDayOfMonth === 1
    ) {
      transactionDate = "Yesterday";
    }

    if (!arrangedHistory[transactionDate]) {
      arrangedHistory[transactionDate] = [];
    }

    arrangedHistory[transactionDate].push({
      ...element,
    });
  });
  //  console.log(arrangedHistory);

  return arrangedHistory;
};
export default function TransactionsHistory() {
  const { transactionsHistory } = useTransactions();

  const [displayedHistory, setDisplayedHistory] = useState({});

  useEffect(() => {
    setDisplayedHistory(arrangeHistoryByDate(transactionsHistory));
  }, [transactionsHistory]);

  return (
    <Page>
      <>
        <Header pageTitle={"History"} />

        {/* Start emTransactions__page */}
        <section className="padding-t-80 padding-l-20 padding-r-20 emTransactions__page padding-b-30">
          {transactionsHistory !== null && displayedHistory.length > 0 ? (
            Object.entries(displayedHistory).map(
              ([day, transaction]) =>
                transaction.length && (
                  <div key={day}>
                    <div className="border-text margin-b-30 margin-t-30">
                      <div className="lined">
                        <span className="text">{day}</span>
                      </div>
                    </div>
                    <div className="emBK__transactions">
                      {transaction.map((item) => (
                        <HistoryItem transaction={item} key={item.id} />
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <p>No Transaction</p>
          )}
        </section>

        {transactionsHistory === null && (
          <div className="padding-b-20">
            <div className="spinner_loading">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        )}
      </>
    </Page>
  );
}
