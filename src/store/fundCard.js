import {createSlice} from '@reduxjs/toolkit'

export const fundCard = createSlice({
    name: 'fundCard',
    initialState: {
        amount: "",
        selectedWalletId: "",
    } ,
    reducers: {
        setFundCard : (state, action) => {
            return action.payload
        }
    }
})

// Action creators are generated for each case reducer
export const {setFundCard} = fundCard.actions

export default fundCard.reducer
