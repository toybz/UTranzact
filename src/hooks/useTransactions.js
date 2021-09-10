import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";

const nodeName = "recent-transactions";

export const useTransactions = () => {
  let [recentTransactions, setRecentTransactions] = useState([]);
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
