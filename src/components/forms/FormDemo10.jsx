import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo10 = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const[output,setOutput]=useState()
    const[isSubmitted,setisSubmitted]=useState(false)
    const submitHandler = (data) => {
        console.log(data)
        setOutput(data)
        setisSubmitted (true)
    }



return (
    <div style={{ textAlign: "center" }}>
        <h1>Form Demo 10</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type="text" placeholder='enter name' {...register("name")} /><br></br>
                {/* <span style={{ color: "red" }}>{errors.name?.message}</span> */}
                <label>AGE</label>
                <input type="number" placeholder='enter number' {...register("number")} />
                {/* <span style={{ color: "red" }}>{errors.number?.message}</span> */}
                <br />
                <label>Color</label>
                <input type="color" {...register("color")}/> <br />
                <input type="submit" />
            </div>

        </form>
        {
            isSubmitted == true ? (<div style={{color:output.color}}>
            <h1>Name:{output?.name}</h1>
            <h1>Age:{output?.number}</h1>
        </div>):""
        }
       
    </div>
)
}
