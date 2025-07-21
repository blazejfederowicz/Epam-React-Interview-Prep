import React, { useState } from "react";

interface formProps{
  name:string;
  password:string;
}


export default function Form() {
  const [data, setdata] = useState<formProps>({name:"",password:""})
  const [error, setError] = useState<formProps>({name:"",password:""})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target;

    setError(prev=>({...prev, [name]:""}))
    setdata(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault()

    const newErrors = {
      name:data.name.trim()?"":"field is required",
      password:data.password.trim()?"":"field is required"
    }

    setError(newErrors)

    const isValid = Object.values(newErrors).every((e:string) => !!!e)

    if(isValid){
      setdata({name:"", password:""})
      setError({name:"", password:""})

      alert("Form has been submited")
    }

  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"start", margin:"0"}}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" onChange={handleChange} value={data.name} />
        <small style={{color:"red"}} aria-live="polite">{error.name}</small>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} value={data.password} />
        <small style={{color:"red"}} aria-live="polite">{error.password}</small>
        <button type="submit" style={{marginTop:"1em"}}>submit</button>
      </form>
    </div>
  );
}