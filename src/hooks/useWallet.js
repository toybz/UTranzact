import { useSelector } from "react-redux";
import { database, DB_NODES } from "../firebase";
import { useEffect, useState } from "react";

export default function useWallet() {
  const [wallets, setWallets] = useState([]);
  const [totalBalance, setTotalBalance] = useState("");

  useEffect(() => {
    const fetchWallets = () => {
      let ref = database.ref(DB_NODES.WALLETS);
      ref.on("value", (snapshot) => {
        const data = Object.values(snapshot?.val() || {});
        setWallets(data);
        calculateTotalBalance(data);
      });
    };
    fetchWallets();
  }, []);

  const addNewWallet = async ({ amount, walletName }) => {
    const walletData = {
      balance: amount,
      cardDetails: {
        cvv: "992",
        expirationDate: "09/20",
        name: "Toyeeb Abdulrahmon",
        number: "2345156754321789",
      },
      name: walletName,
      user: "1",
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
