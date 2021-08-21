import {database} from "../firebase";
import {useEffect, useState} from "react";

const nodeName = "recent-transactions"

export const useTransactions = () => {

    let [recentTransactions, setRecentTransactions] = useState([]);
    useEffect(()=> {
        let res = database.ref('recent-transactions');
        return   res.on('value', (snapshot) => {
            const data = Object.values(snapshot.val()) ;
            setRecentTransactions(data)
        });

    }, [])

    const newTransaction = (transaction,callback) =>{
        database.ref().child(nodeName).push(transaction, (a)=>callback());
    }



    return {
        recentTransactions,
        newTransaction
    }
}
