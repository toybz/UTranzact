import { useSelector } from "react-redux";

export default function useSavedTransaction() {
  const savedTransactions = useSelector((store) => store.savedTransactions);

  return {
    savedTransactions,
  };
}
