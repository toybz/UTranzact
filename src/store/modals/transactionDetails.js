import {createSlice} from '@reduxjs/toolkit'

export const transactionDetails = createSlice({
    name: 'transactionDetails',
    initialState:  {
        id: "",
        status: "",
        category: "",
        subCategory: "PayTv",
        amount: "",
        dateTime: "",
        description: "",
        benefactor: {
            name: "",
            destinationId: "",
            accountProvider: {
                name: "",
                id: ""
            },
            image: "",
        },
        meta: {
            paymentItemName: ""
        }
        ,
        debitWallet: {
            name: "",
            id: "",
        }
    },
    reducers: {
        updateTransactionDetails: (state, action) => {
            return action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {updateTransactionDetails} = transactionDetails.actions

export default transactionDetails.reducer
