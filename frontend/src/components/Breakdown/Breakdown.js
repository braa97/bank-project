import "./Breakdown.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Breakdown() {
  const [breakdown, setBreakdown] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get("http://localhost:4200/breakdown");
      setBreakdown(response.data);
    };
    getData();
  }, []);

  return (
    <div className="breakdown">
      <h1>BreakDown</h1>
      {breakdown.map((category) => (
        <div className="category">
          <div className="category-name">
            <label>{category._id}: {category.total}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Breakdown;
