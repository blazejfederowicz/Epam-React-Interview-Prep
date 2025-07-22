import { useState } from "react";
import './style.css'

export default function DragDrop() {
  const [items, setItems] = useState<string[]>([]);

  const handleDrag = (event:React.DragEvent<HTMLElement>)=>{
    event.dataTransfer.setData("widgetType", event.currentTarget.outerText)
  }
  const handleDragOver = (event:React.DragEvent)=> event.preventDefault()
  const handleDrop = (event: React.DragEvent)=>{
    event.preventDefault()

    const widget = event.dataTransfer.getData("widgetType") 

    setItems([...items, widget])
  }

  return (
    <div className="main">
      <h1>Drag and drop Component</h1>
      <div className="container">
        <div draggable className="widget after" onDragStart={handleDrag}>Item-A</div>
        <div draggable className="widget after" onDragStart={handleDrag}>Item-B</div>
        <div draggable className="widget after" onDragStart={handleDrag}>Item-C</div>
      </div>
      <div onDrop={handleDrop} onDragOver={handleDragOver} data-testid="drag-drop-area" className="container border">
        {items.map((e,i)=>(
          <div key={i} className="widget">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}