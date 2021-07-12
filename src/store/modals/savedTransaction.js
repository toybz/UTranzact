import {createSlice} from '@reduxjs/toolkit'

export const confirmTransaction = createSlice({
    name: 'savedTransaction',
    initialState: {
        title: "",
        description: "",
        transactionId: "",
        amount: "",
        receiver: {
            name: "",
            accountNumber: "",
            image: "",
            id: "",
        },
        wallet: {
            id: "",
            name: "",

        }

    },
    reducers: {
        update: (state, action) => {
            return action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {update} = confirmTransaction.actions

export default confirmTransaction.reducer
