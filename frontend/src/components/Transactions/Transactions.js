import "./Transactions.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "../Transaction/Transaction";

function Transactions({ updateBalance }) {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    let response = await axios.get("http://localhost:4200");
    setTransactions(response.data);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  console.log("yes");
  return (
    <div className="container">
      <div className="transactions-container">
        {transactions.length == 0 ? <div>There's no data</div> : null}
        {transactions.map((t) => (
          <Transaction
            key={t.vendor}
            transaction={t}
            updateBalance={updateBalance}
            getTransactions={getTransactions}
          />
        ))}
      </div>
    </div>
  );
}

export default Transactions;
