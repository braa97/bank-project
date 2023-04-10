import "./Transaction.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Transaction({transaction, updateBalance, getTransactions}) {


  const deleteTransaction = async () => {
    try {
      let response = await axios.delete(`http://localhost:4200/transaction/${transaction._id}`)
      if (response.status === 204) {
        alert("Transaction deleted successfully.")
        updateBalance()
        getTransactions()
      }
    }
    catch (error) {
      alert("Something went wrong!.")
      console.log(error);
    }
  }

  return (
    <div className="transaction">
      <div className="transaction-name-category">
        <label>{transaction.vendor}</label>
        <h2>{transaction.category}</h2>
      </div>
      <div className="transaction-price-button">
        <label className={transaction.amount > 0 ? "deposit" : "withdraw"}>{transaction.amount}</label>
        <button onClick={deleteTransaction}>Delete</button>
      </div>
    </div>
  );
}

export default Transaction;
