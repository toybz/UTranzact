import {useQuery} from "react-query";
import axios from "axios";

export const BASE_URL = "https://fintech-53fe8-default-rtdb.firebaseio.com/";

const fetch = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const USER_WALLETS = `${BASE_URL}/users-wallet.json`;
export function useFetchUserWallets() {
  return useQuery("wallets", async () => {
    const { data } = await axios.get(USER_WALLETS);
    return data;
  });
}

const SAVED_TRANSACTIONS = `${BASE_URL}/saved-transactions.json`;
export function useFetchSavedTransactions() {
  return useQuery("savedTransactions", () => fetch(SAVED_TRANSACTIONS));
}

const RECENT_TRANSACTIONS = `${BASE_URL}/recent-transactions.json`;
export function useFetchRecentTransactions() {
  return useQuery("recentTransactions", () => fetch(RECENT_TRANSACTIONS));
}

const SUBMIT_OPERATION = `${BASE_URL}/recent-transactions.json`;
export function useSubmitOperation() {
  const submit = async () => {
    return await fetch(SUBMIT_OPERATION);
  };

  return {
    submit,
  };
}

export function useUpdateWallet() {
  const updateWallet = async (wallets) => {
    const { data } = await axios.put(USER_WALLETS, wallets);
    return data;
  };
  return {
    updateWallet,
  };
}
