import { useEffect, useState } from "react";
import './index.css'; 

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c = JSON.parse(localStorage.getItem("count"));
    if (c !== null) {
      setCount(c);
    }
  }, []);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  const decrement = () => {
    if (count <= 0) {
      alert("Count cannot be less than 0");
      return; 
    }
    const newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let Reset = ()=>{
    setCount(0);
    localStorage.setItem.stringify((0));
  }

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <div className="counter-controls">
        <button className="counter-button" onClick={decrement}>-</button>
        <p className="counter-value">{count}</p>
        <button className="counter-button" onClick={increment}>+</button>
      </div>
       <button className="reset" onClick={Reset}>Reset</button>
    </div>
  );
}

export default Count;
