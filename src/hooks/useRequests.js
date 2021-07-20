import {useQuery} from "react-query";
import axios from "axios";
import {USER_WALLETS} from "../urls";


export function useFetchUserWallets() {
   return  useQuery("wallets", async () => {
        const {data} = await axios.get(
            USER_WALLETS
        );
        return data;
    });
}
