import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const { register, handleSubmit } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Startup Idea Submission Form</h1> <br /><br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Full Name:</label>
                <input type="text" placeholder='Enter Name' {...register("name")} /> <br /><br />
                <label>Email Address: </label>
                <input type="email" placeholder='Enter Email' {...register("email")} /> <br /><br />
                <label >Startup Idea Name:</label>
                <input type="text" placeholder='Enter Idea Name' {...register("iname")} /> <br /><br />
                <label>Describe Your Idea:</label> <br />
                <textarea rows="3" cols="25" placeholder='Enter Idea Description' {...register("describe")}></textarea><br /><br />
                <label>What Problem Does It Solve?: </label>
                <input type="text" placeholder='Enter Solution' {...register("improve")} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
