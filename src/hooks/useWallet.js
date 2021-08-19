import {setFundCard} from "../store/fundCard";
import {useFetchUserWallets, useUpdateWallet} from "./useRequests";
import {useDispatch, useSelector} from "react-redux";
import {showToast} from "../helpers/Utils";


export default function useWallet (){
    const dispatch = useDispatch();

    const { data: userWallets, refetch: reFetchWallets } = useFetchUserWallets();

    const { amount, selectedWalletId } = useSelector((store) => store.fundCard);
    const { updateWallet } = useUpdateWallet();


    const updateWalletBalance = async () => {

     const selectedWalletIndex = userWallets.findIndex(
            (wallet) => wallet.id === selectedWalletId
        );

        let newWallets = [...userWallets];
        newWallets[selectedWalletIndex].balance =
            (parseInt(newWallets[selectedWalletIndex].balance) || 0) +
            parseInt(amount);
        await updateWallet(newWallets);
        reFetchWallets();
        showToast("Account Top up Successful", "success");
        dispatch(setFundCard({ amount: "", selectedWalletId: "" }));

    };

    return {
        updateWalletBalance
    }

}
