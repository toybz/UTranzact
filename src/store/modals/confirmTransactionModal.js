import {createSlice} from '@reduxjs/toolkit'

export const confirmTransaction = createSlice({
    name: 'confirmTransaction',
    initialState: {
        id: "",
        amount: "",
        category: "",
        subCategory: "",
        dateTime: "",
        status: "",
        description: "",
        benefactor: {
            name: "",
            destinationId: "",
            accountProvider: {
                name: "",
                id: "",
                image: "",

            }
        },
        meta: {
            paymentItemName: ""
        },
        debitWallet: {
            name: "Default",
            id: "001",
        }
    } ,
    reducers: {
        update: (state, action) => {
            return action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {update} = confirmTransaction.actions

export default confirmTransaction.reducer
