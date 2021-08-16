import {configureStore} from '@reduxjs/toolkit'

import transactionDetails from "./modals/transactionDetails"
import fundCard from "./fundCard";
export default configureStore({
    reducer: {
        'transactionDetails': transactionDetails,
        'fundCard' : fundCard

    },
})


