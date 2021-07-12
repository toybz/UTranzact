import {useState} from 'react';


export function useTransactionDetailsModal() {

    const [transactionDetails, setTransactionDetails] = useState({})

    const openTransactionDetailModal = (details) => {

        setTransactionDetails((oldValue) => {
            return {...oldValue, details}
        })
        document.jQuery('#transaction_detail_modal').modal({})

    }

}

export function useSavedTransactionModal() {

    const SAVED_TRANSACTION_MODAL_ID = "confirm_saved_payment_transaction_modal";

    const [selectedSavedTransactions, setSelectedSavedTransactions] = useState({})

    const openSavedTransactionModal = (repaymentData) => {
        setSelectedSavedTransactions(repaymentData)
        document.jQuery(`#${SAVED_TRANSACTION_MODAL_ID}`).modal({})
    }

    const rePaySavedTransaction = () => {

    }

    return {
        SAVED_TRANSACTION_MODAL_ID,
        selectedSavedTransactions,
        openSavedTransactionModal,
        rePaySavedTransaction
    }


}
