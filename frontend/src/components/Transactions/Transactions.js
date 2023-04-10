import './Transactions.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Transaction from '../Transaction/Transaction'

function Transactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get('http://localhost:4200')  
            setTransactions(response.data)
        }
        getData()
    }, [])

    return (
        <div className='transactions-container'>
            {transactions.map(t => (<Transaction key={t.vendor} transaction={t} /> ))}
        </div>
    );
  }
  
  export default Transactions;
  