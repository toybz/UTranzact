import { useSelector } from "react-redux";
import { database, DB_NODES } from "../firebase";
import { useState } from "react";
import useAuth from "./useAuth";

export default function useWallet() {
  const [totalBalance] = useState("");

  const wallets = useSelector((store) => store.userWallet);

  const { userDetails } = useAuth();

  const addNewWallet = async ({ amount, walletName }) => {
    const walletData = {
      balance: amount,
      cardDetails: {
        cvv: "992",
        expirationDate: "09/23",
        name: userDetails.fullName || userDetails.displayName,
        number: "2345156754321789",
      },
      name: walletName,
      uid: userDetails.uid,
    };

    const operation = await database.ref(DB_NODES.WALLETS).push();

    return operation.set({
      ...walletData,
      id: operation.key,
    });
  };

  const { amount, selectedWalletId } = useSelector((store) => store.fundCard);

  const fundWallet = async () => {
    const selectedWalletIndex = wallets.findIndex(
      (wallet) => wallet.id === selectedWalletId
    );

    const newBalance =
      (parseInt(wallets[selectedWalletIndex].balance) || 0) + parseInt(amount);

    return updateWalletBalance(selectedWalletId, newBalance);
  };

  const subtractFromWallet = async (walletId, amount) => {
    const selectedWalletIndex = wallets.findIndex(
      (wallet) => wallet.id === walletId
    );
    const newBalance =
      (parseInt(wallets[selectedWalletIndex]?.balance) || 0) - parseInt(amount);

    return updateWalletBalance(walletId, newBalance);
  };

  const updateWalletBalance = (walletId, amount) => {
    return database
      .ref(DB_NODES.WALLETS)
      .child(walletId)
      .update({ balance: amount });
  };

  const getWalletBalance = (walletId) => {
    const selectedWallet = wallets.find((wallet) => wallet.id === walletId);
    return selectedWallet.balance;
  };

  return {
    addNewWallet,
    fundWallet,
    subtractFromWallet,
    getWalletBalance,
    wallets,
    totalBalance,
  };
}
