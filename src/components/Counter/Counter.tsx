import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count>0? setCount(count - 1): count;
  return (
    <div>
      <h1>Counter Component</h1>
      <p style={{fontSize:"2rem"}}>Count: {count}</p>
      <div style={{display:"flex", gap:"2em", width:"100%", alignItems:"center", justifyContent:"center"}}>
        <button role="button" onClick={handleDecrement}>decrement</button>
        <button role="button" onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
}