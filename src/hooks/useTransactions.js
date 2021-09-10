import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";

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

const nodeName = "recent-transactions";

export const useTransactions = () => {
  let [recentTransactions, setRecentTransactions] = useState([]);

  let [transactionsHistory, setTransactionsHistory] = useState({});

  const { subtractFromWallet } = useWallet();
  useEffect(() => {
    const fetchRecentTransactions = () => {
      let ref = database.ref(DB_NODES.RECENT_TRANSACTIONS);
      ref.limitToLast(5).on("value", (snapshot) => {
        const data = Object.values(snapshot?.val() || {});

        // Reversed the data so the last item added comes first
        setRecentTransactions(data.reverse());
      });
    };
    fetchRecentTransactions();
  }, []);

  useEffect(() => {
    const fetchTransactionHistory = () => {
      let ref = database.ref(DB_NODES.RECENT_TRANSACTIONS);
      ref.on("value", (snapshot) => {
        const data = Object.values(snapshot?.val() || {});

        setTransactionsHistory(arrangeHistoryByDate(data));
      });
    };

    fetchTransactionHistory();
  }, []);

  const newTransaction = async (transactionData) => {
    const transaction = { ...transactionData, dateTime: Date.now() };
    const operation = await database.ref(nodeName).push();

    //todo: Decrease the wallet balance here
    return operation
      .set({
        ...transaction,
        id: operation.key,
      })
      .then(() => {
        return subtractFromWallet(
          transaction.debitWallet.id,
          transaction.amount
        );
      });
  };

  const { wallets: userWallets } = useWallet();
  const [selectedDebitWallet, setSelectedDebitWallet] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    if (userWallets && userWallets.length > 0) {
      setSelectedDebitWallet(userWallets[0]);
    }
  }, [userWallets]);

  const changeSelectedWallet = (walletId) => {
    const wallet = userWallets.find((item) => item.id === walletId);
    setSelectedDebitWallet(wallet);
  };

  const selectWallet = (
    <div className="form-group input-lined">
      <select
        className="form-control custom-select"
        value={selectedDebitWallet.id}
        onChange={(e) => changeSelectedWallet(e.target.value)}
      >
        {userWallets &&
          userWallets.map((wallet) => (
            <option key={wallet.id} value={wallet.id}>
              {wallet.name} - &#x20A6;{wallet.balance}
            </option>
          ))}
      </select>
      <label>Choose Debit Card</label>
    </div>
  );

  const [isProcessingTransaction, setIsProcessingTransaction] = useState(false);

  return {
    recentTransactions,
    transactionsHistory,
    newTransaction,
    userWallets,
    selectWallet,
    selectedDebitWallet,
    setSelectedDebitWallet,
    changeSelectedWallet,
    isProcessingTransaction,
    setIsProcessingTransaction,
  };
};
