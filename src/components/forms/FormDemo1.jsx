import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const {register,handleSubmit} = useForm()
  const submitHandler =(data) => {
    console.log(data)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" placeholder='enter name' {...register("name")}/>
          <label>AGE</label>
          <input type="number" placeholder='enter number' {...register("number")}/>
          <label>BUDGET</label>
          <input type="number" placeholder='enter budget' {...register("budget")}/>
          <br />
          <input type="submit" />
        </div>

        </form>
    </div>
  )
}
