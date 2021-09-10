import Header from "../components/Header";
import Page from "./Page";
import { useTransactions } from "../hooks/useTransactions";
import HistoryItem from "../components/HistoryItem";
import LoadingCard from "../components/LoadingCard";

export default function TransactionsHistory() {
  let { transactionsHistory } = useTransactions();

  return (
    <Page>
      <>
        <Header pageTitle={"History"} />

        {/* Start emTransactions__page */}
        <section className="padding-t-80 padding-l-20 padding-r-20 emTransactions__page padding-b-30">
          {transactionsHistory ? (
            Object.entries(transactionsHistory)
              .reverse()
              .map(
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
            <LoadingCard />
          )}
        </section>

        {/* Start spinner_loading */}
        <div className="padding-b-20">
          <div className="spinner_loading">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </>
    </Page>
  );
}
