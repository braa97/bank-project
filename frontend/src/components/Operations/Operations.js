import "./Operations.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Operations({ setBalance }) {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionVendor, setTransactionVendor] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");
  const navigate = useNavigate()

  const updateBalance = async () => {
    let response = await axios.get("http://localhost:4200/balance");
    setBalance(response.data[0].total);
  };

  const createNewTransaction = async (operation) => {
    let amount = transactionAmount;
    if (operation === "withdraw") {
      amount = transactionAmount * -1;
    }
    try {
      let transaction = await axios.post(
        "http://localhost:4200/makeTransaction",
        {
          amount: amount,
          vendor: transactionVendor,
          category: transactionCategory,
        }
      );
      if (transaction.status === 201) {
        alert("Transaction added");
        updateBalance();
        setTransactionAmount("");
        setTransactionVendor("");
        setTransactionCategory("");
      }
    } 
    catch (error) {
      alert("Something went wrong");
      console.log(error);
    }
    navigate('/')
  };

  return (
    <div>
      <div className="operations">
        <h1>Insert Transactions</h1>
        <input
          className="operation"
          onChange={(event) => setTransactionAmount(event.target.value)}
          placeholder="Transaction amount"
          value={transactionAmount}
        />
        <input
          className="operation"
          onChange={(event) => setTransactionVendor(event.target.value)}
          placeholder="Transaction vendor"
          value={transactionVendor}
        />
        <input
          className="operation"
          onChange={(event) => setTransactionCategory(event.target.value)}
          placeholder="Transaction category"
          value={transactionCategory}
        />
        <div className="deposit-withdraw-buttons">
          <button
            className="operation-button deposit"
            onClick={() => createNewTransaction("deposit")}
          >
            Deposit
          </button>
          <button
            className="operation-button withdraw"
            onClick={() => createNewTransaction("withdraw")}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Operations;
