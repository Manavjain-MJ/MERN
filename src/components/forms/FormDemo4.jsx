import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

     const { register, handleSubmit } = useForm()
        const submitHandler = (data) => {
            console.log(data)
        }

  return (
    <div style={{ textAlign: "center" }}>
    <h1>Form Demo 3</h1>
    <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name</label>
            <input type="text" placeholder='enter name' {...register("name")} />
            <label>AGE</label>
            <input type="text" placeholder='enter age'  {...register("age")} />
            <label>E-mail</label><br />
            <input type="email" placeholder='enter email' {...register("email")} />

            <br />
            <input type="submit" />
        </div>

    </form>
</div>
  )
}
