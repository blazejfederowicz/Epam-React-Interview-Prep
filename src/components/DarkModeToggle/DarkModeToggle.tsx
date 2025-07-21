import { useEffect, useState } from "react";

const DARK_MODE = "dark-mode"

export default function DarkModeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  const handleDarkMode = () => setDark(!dark);
    
  useEffect(()=>{
    if(dark){
      document.body.classList.add(DARK_MODE);
    } else {
      document.body.classList.remove(DARK_MODE)
    }
  },[dark])  

  return (
    <div>
      <h1>Dark Mode Toggle Component</h1>
      <button onClick={handleDarkMode}>Switch Mode</button>
    </div>
  );
}