import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";
import useWallet from "./useWallet";
import { showToast } from "../helpers/Utils";
import useAuth from "./useAuth";
import { useSelector } from "react-redux";

export const useTransactions = () => {
  const transactionsHistory = useSelector((store) => store.recentTransactions);

  const recentTransactions = transactionsHistory
    ? transactionsHistory.slice(0, 5)
    : null;

  const { userDetails } = useAuth();

  const { subtractFromWallet, getWalletBalance } = useWallet();

  const isSufficientFundsForTransaction = (walletId, newTransactionAmount) => {
    return getWalletBalance(walletId) >= newTransactionAmount;
  };

  const newTransaction = async (transactionData) => {
    if (
      !isSufficientFundsForTransaction(
        transactionData.debitWallet.id,
        transactionData.amount
      )
    ) {
      showToast("Error: Insufficient Funds in Selected Wallet", "error");
      setIsProcessingTransaction(false);
      return new Promise((resolve, reject) => {
        reject("Error: Insufficient Funds in Selected Wallet");
      });
    }

    const transaction = {
      ...transactionData,
      dateTime: Date.now(),
      uid: userDetails.uid,
    };
    const operation = await database.ref(DB_NODES.RECENT_TRANSACTIONS).push();

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
