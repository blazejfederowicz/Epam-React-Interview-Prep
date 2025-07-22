import { useEffect, useState } from "react";

export default function SearchFilter({items}: {items: string[]}) {
  const [filter, setFilter] = useState<string[] | undefined>(items);
  const [input, setInput] = useState<string>('')

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {value} = event.target;

    setInput(value)
  }

  useEffect(()=>{
    if(!input.trim()) return setFilter(items)

    const filteredArr = items.filter(e=> e.includes(input))

    setFilter(filteredArr)
  },[input])

  return (
    <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
      <h1>Search Filter Component</h1>
      <input id="filter" name="filter" onChange={handleChange} value={input}/>
      <ul>
        {filter?.map((e,i)=>(
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}   