import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register,handleSubmit}=useForm()
    const submithandler=(data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Customer Satisfaction Survey</h1> <br /><br />
        <form onSubmit={handleSubmit(submithandler)}>
            <label>Customer Name:</label>
            <input type="text" placeholder='Enter Name' {...register("name")} /> <br /><br />
            <label>Email</label>
            <input type="email" placeholder='Enter Email' {...register("email")}/> <br /> <br />
            <label>How satisfied are you with our service?</label>
            <select {...register("satisfaction")}>
                <option value="very satisfied">Very Satisfied</option>
                <option value="satisfied">Satisfied</option>
                <option value="neutral">Neutral</option>
                <option value="unsatisfied">Unsatisfied</option>
                <option value="very unsatisfied">very unsatisfied</option>
            </select> <br /> <br />
            <label >What do you like the most about our service?</label>
            <input type="text" placeholder='Enter Text' {...register("service")} /><br /> <br />
            <label>Any additional comments or suggestions? </label>
            <input type="text" placeholder='Enter Your Suggestion' {...register("improve")} /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
