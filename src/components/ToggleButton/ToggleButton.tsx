import { useState } from "react";

export default function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle)

  return (
    <div>
      <h1>Toggle Button Component</h1>
      <button onClick={handleToggle}>{toggle?"on":"off"}</button>
    </div>
  );
}