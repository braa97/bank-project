import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Transactions from "./components/Transactions/Transactions";
import Operations from './components/Operations/Operations'
import Breakdown from './components/Breakdown/Breakdown'
import axios from "axios";

function App() {
  const [balance, setBalance] = useState(0)

  const updateBalance = async () => {
    let response = await axios.get("http://localhost:4200/balance");
    setBalance(response.data.total != undefined ? response.data.total : 0);
  };

  useEffect(() => {
    updateBalance()
}, [balance])

  return (
    <Router>
      <Navbar balance={balance} />
      <Routes>
        <Route path="/" element={<Transactions updateBalance={updateBalance} />} />
        <Route path="/operations" element={<Operations updateBalance={updateBalance} />} />
        <Route path="/breakdown" element={<Breakdown />} />
      </Routes>
    </Router>
  );
}

export default App;
