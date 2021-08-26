import { useSelector } from "react-redux";
import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";

export default function useWallet() {
  const [wallets, setWallets] = useState([]);
  const [totalBalance, setTotalBalance] = useState("");
  useEffect(() => {
    fetchWallets();
  }, []);

  const { amount, selectedWalletId } = useSelector((store) => store.fundCard);

  const fetchWallets = () => {
    let ref = database.ref(DB_NODES.WALLETS);
    ref.on("value", (snapshot) => {
      const data = Object.values(snapshot?.val() || {});
      setWallets(data);
      calculateTotalBalance(data);
    });
  };

  const fundWallet = async () => {
    const selectedWalletIndex = wallets.findIndex(
      (wallet) => wallet.id === selectedWalletId
    );

    const newBalance =
      (parseInt(wallets[selectedWalletIndex].balance) || 0) + parseInt(amount);

    return updateWalletBalance(selectedWalletId, newBalance);
  };

  const subtractFromWallet = async (walletId, amount) => {
    walletId = parseInt(walletId);
    const selectedWalletIndex = wallets.findIndex(
      (wallet) => parseInt(wallet.id) === parseInt(walletId)
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

  const calculateTotalBalance = (wallets) => {
    let balance = 0;
    if (wallets && wallets[0].balance) {
      wallets.map((item) => {
        balance += parseInt(item.balance);
        return balance;
      });
    }
    setTotalBalance(balance);
  };

  return {
    fundWallet,
    subtractFromWallet,
    wallets,
    totalBalance,
  };
}
