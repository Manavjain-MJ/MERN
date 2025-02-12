import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit} = useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employee Feedback Form</h1> <br />
        <form onSubmit={handleSubmit(submitHandler)}>
            <label>Employee Name:</label>
            <input type="text" placeholder='Enter Employee Name' {...register("name")} /> <br /><br />
            <label>Department</label>
            <select {...register("department")}>
                <option value="hr">HR</option>
                <option value="it">IT</option>
                <option value="marketing">MARKETING</option>
            </select> <br /> <br />
            <label >Overall Job Satisfaction:</label>
            <b>1</b><input type="range" id="satisfaction" name="satisfaction" min="1" max="10" {...register("satisfaction")} /><b>10</b><br /> <br />
            <label>Biggest Workplace Challenge:</label>
            <input type="text" placeholder='Enter Biggest Challenge' {...register("challenge")} /><br /><br />
            <label>Suggestions for Improvement </label>
            <input type="text" placeholder='Enter Your Suggestion' {...register("improve")} /><br /><br />
            <input type="submit" value="Submit" />
        </form>

    </div>
  )
}
