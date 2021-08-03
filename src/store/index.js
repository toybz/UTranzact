import {configureStore} from '@reduxjs/toolkit'

import transactionDetails from "./modals/transactionDetails"
export default configureStore({
    reducer: {
        'transactionDetails': transactionDetails
    },
})


