import {configureStore} from '@reduxjs/toolkit'
import confirmTransaction from "./modals/savedTransaction";

export default configureStore({
    reducer: {
        'confirmTransactionModal': confirmTransaction
    },
})

