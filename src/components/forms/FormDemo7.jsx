import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {
    const { register, handleSubmit,formState:{errors} } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    const validateschema={
        namevalidator:{
            required:{
                value:true,
                message:"*Name is required"
            }
        },
        emailvalidator:{
            required:{
                value:true,
                message:"*Email is required"
            }
        },
        inamevalidator:{
            required:{
                value:true,
                message:"*Idea Name is required"
            }
        },
        describevalidator:{
            required:{
                value:true,
                message:"*Description is required"
            }
        },
        improvevalidator:{
            required:{
                value:true,
                message:"*Solved problems are required"
            }
        },
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Startup Idea Submission Form</h1> <br /><br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Full Name:</label>
                <input type="text" placeholder='Enter Name' {...register("name",validateschema.namevalidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.name?.message
                    }
                </span>
                <br /><br />
                <label>Email Address: </label>
                <input type="email" placeholder='Enter Email' {...register("email",validateschema.emailvalidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.email?.message
                    }
                </span>
                 <br /><br />
                <label >Startup Idea Name:</label>
                <input type="text" placeholder='Enter Idea Name' {...register("iname",validateschema.inamevalidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.iname?.message
                    }
                </span>
                 <br /><br />
                <label>Describe Your Idea:</label> <br />
                <textarea rows="3" cols="25" placeholder='Enter Idea Description' {...register("describe",validateschema.describevalidator)}></textarea>
                <span style={{color:"red"}}>
                    {
                        errors.describe?.message
                    }
                </span>
                <br /><br />
                <label>What Problem Does It Solve?: </label>
                <input type="text" placeholder='Enter Solution' {...register("improve",validateschema.improvevalidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.improve?.message
                    }
                </span>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
