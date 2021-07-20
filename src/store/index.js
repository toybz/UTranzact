import {configureStore} from '@reduxjs/toolkit'
import confirmTransaction from "./modals/confirmTransactionModal";
import transactionDetails from "./modals/transactionDetails"
export default configureStore({
    reducer: {
        'transactionDetails': transactionDetails
    },
})


