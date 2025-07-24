import { useState } from "react"

export default function ToDoList(){
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;

        setTask(value)
    }

    const handleAddTask = ()=> {
        setTaskList(prev=>[task as string,...prev])
        setTask("")
    }

    const handleDelete = (index:number)=>{
        setTaskList(taskList.filter((_,i) => i!==index))
    }

    return(
        <div className="">
            <h1>To Do List Component</h1>
            <div style={{display:"flex", gap:"1em", alignItems:"center", justifyContent:"center", margin:"2em 0"}}>
                <label htmlFor="task">Insert activity:</label>
                <input id="task" name="task" onChange={handleChange} value={task} style={{padding:"4px", borderRadius:"5px"}}/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div style={{display:"flex", flexDirection:"column", backgroundColor:"#e1e1e1ff", minHeight:"200px", border:"2px black solid", borderRadius:"10px", padding:"1em 2em"}}>
                {
                    taskList.map((e,i) => (
                        <div key={i} style={{display:"flex", justifyContent:"space-between", backgroundColor:" #d5d8dbff", padding:"0.5em 1em", borderRadius:"10px", marginBottom: i<taskList.length-1?"1em":""}}>
                            <p style={{color:"#4e5cdeff", fontWeight:"bold"}}>{e}</p>
                            <button onClick={()=>handleDelete(i)}>DELETE</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}