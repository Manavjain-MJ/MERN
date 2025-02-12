import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
    const {register,handleSubmit}=useForm()
    const submithandler=(data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>Bug Report Form</h1> <br /> <br />
        <form onSubmit={handleSubmit(submithandler)}>
            <label>Reporter Name:</label>
            <input type="text" placeholder='Enter Name' {...register("name")} /> <br /><br />
            <label>Email</label>
            <input type="email" placeholder='Enter Email' {...register("email")}/> <br /> <br />
            <label>Bug Severity</label>
            <select {...register("severity")}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="neutral">Neutral</option>
                <option value="critical">Critical</option>
            </select> <br /> <br />
            <label >Describe the Issue</label>
            <input type="text" placeholder='Enter Issue Description' {...register("issue")} /><br /> <br />
            <label>Steps to Reproduce </label>
            <input type="text" placeholder='Enter Your Steps' {...register("reproduce")} /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
