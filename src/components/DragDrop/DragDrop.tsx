import { useState } from "react";

export default function DragDrop() {
  const [dropped, setDropped] = useState(false);

  const handleDragOver = (event)=> event.preventDefault()
  const handleDrop = (event)=>{
    event.preventDefault()

    setDropped(true)
  }

  return (
    <div>
      <h1>Drag and drop Component</h1>
      {/* Dark mode toggle logic will go here */}
      <div onDrop={handleDrop} onDragOver={handleDragOver} data-testid="drag-drop-area" style={{width:"100%", height:"100px", backgroundColor:"yellow"}}>
        {dropped ? 'Item Dropped!' : 'Drag item here'}
      </div>
    </div>
  );
}