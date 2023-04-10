import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Transactions from "./components/Transactions/Transactions";
import SmallNavbar from './components/SmallNav/SmallNavbar'
import Operations from './components/Operations/Operations'
import Breakdown from './components/Breakdown/Breakdown'
import axios from "axios";

function App() {
  const [balance, setBalance] = useState([])
  const [windowsDimensions, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  })

  useEffect(() => {
    const getData = async() => {
      let response = await axios.get('http://localhost:4200/balance')
      setBalance(response.data[0].total)
    }
    getData()
}, [])

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return() => {
          window.removeEventListener('resize', detectSize)
        }
    }, [windowsDimensions])
  
  return (
    <Router>
      {windowsDimensions.winWidth < 600 ? <SmallNavbar balance={balance} /> : <Navbar balance={balance} />}
      <Routes>
        <Route path="/" element={<Transactions setBalance={setBalance} />} />
        <Route path="/operations" element={<Operations setBalance={setBalance} />} />
        <Route path="/breakdown" element={<Breakdown />} />
      </Routes>
    </Router>
  );
}

export default App;
