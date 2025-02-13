import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo9 = () => {

    const {register,handleSubmit,formState:{errors}}=useForm()
    const submithandler=(data)=>{
        console.log(data)

    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required"
            },
            min:{
                required:{
                    value:18,
                    message:"Above 18 only"
                }
            },
            max:{
                required:{
                    value:60,
                    message:"below 60 only"
                }
            }
        },
        emailValidator:{
                    required:{
                        value:true,
                        message:"Enter email"
                    }

        },
        contactValidator:{
                pattern:{
                    value:/[6-9][1][0-9][9]/,
                    message:"Contact is required"

                }

        }
    }



  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo9</h1>
        <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Name</label>
          <input type="text" placeholder='enter name' {...register("name",validationSchema.nameValidator)}/>
          <span style={{color:"red"}}>{
            errors.name?.message
            }</span><br /><br />
          <label>AGE</label>
          <input type="number" placeholder='enter age' {...register("age",validationSchema.ageValidator)}/>
          <span style={{color:"red"}}>{
            errors.age?.message
            }</span><br /><br />
          <label>Email</label>
          <input type="number" placeholder='enter email' {...register("email",validationSchema.emailValidator)}/>
          <span style={{color:"red"}}>{
            errors.email?.message
            }</span><br /><br />
          <br />
          <label>CONTACT</label>
          <input type="number" placeholder='enter contact' {...register("contact",validationSchema.contactValidator)}/>
          <span style={{color:"red"}}>{
            errors.contact?.message
            }</span><br /><br />
          <input type="submit" />
        </div>
        </form>


    </div>
  )
}
