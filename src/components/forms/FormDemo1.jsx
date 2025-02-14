import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const {register,handleSubmit,formState:{errors}} = useForm()
  const submitHandler =(data) => {
    console.log(data)
  }

    const validationschema={
      namevalidator:{
          required:{
            value:true,
            message:"Name is required"
          }
      },
      agevalidator:{
        required:{
          value:true,
          message:"Age is required"
        }
      },
      budgetvalidator:{
        required:{
          value:true,
          message:"Budget is requried"
        }
      }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" placeholder='enter name' {...register("name",validationschema.namevalidator)}/>
          <span style={{color:"red"}}>{errors.name?.message}</span>
          <label>AGE</label>
          <input type="number" placeholder='enter number' {...register("number",validationschema.agevalidator)}/>
          <span style={{color:"red"}}>{errors.number?.message}</span>
          <label>BUDGET</label>
          <input type="number" placeholder='enter budget' {...register("budget",validationschema.budgetvalidator)}/>
          <span style={{color:"red"}}>{errors.budget?.message}</span>
          <br />
          <input type="submit" />
        </div>

        </form>
    </div>
  )
}
