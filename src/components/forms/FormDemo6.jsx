import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const submithandler = (data) => {
        console.log(data)
    }
    const validateschema = {
        namevalidator: {
            required: {
                value: true,
                message: "*Name is required"
            }
        },
        emailvalidator: {
            required: {
                value: true,
                message: "*Email is required"
            }
        },
        satisfactionvalidator: {
            required: {
                value: true,
                message: "*Feedback is required"
            }
        },
        servicevalidator: {
            required: {
                value: true,
                message: "*Most liked thing of our service is required"
            }
        },
        improvevalidator: {
            required: {
                value: true,
                message: "*Feedback is required"
            }
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1> Customer Satisfaction Survey</h1> <br /><br />
            <form onSubmit={handleSubmit(submithandler)}>
                <label>Customer Name:</label>
                <input type="text" placeholder='Enter Name' {...register("name", validateschema.namevalidator)} />
                <span style={{ color: "red" }}>
                    {
                        errors.name?.message
                    }
                </span>
                <br /><br />
                <label>Email</label>
                <input type="email" placeholder='Enter Email' {...register("email", validateschema.emailvalidator)} />
                <span style={{ color: "red" }}>
                    {
                        errors.email?.message
                    }
                </span>
                <br /> <br />
                <label>How satisfied are you with our service?</label>
                <select {...register("satisfaction", validateschema.satisfactionvalidator)}>
                    <option value="">Select</option>
                    <option value="very satisfied">Very Satisfied</option>
                    <option value="satisfied">Satisfied</option>
                    <option value="neutral">Neutral</option>
                    <option value="unsatisfied">Unsatisfied</option>
                    <option value="very unsatisfied">very unsatisfied</option>
                </select>
                <span style={{ color: "red" }}>
                    {
                        errors.satisfaction?.message
                    }
                </span>
                <br /> <br />
                <label >What do you like the most about our service?</label>
                <input type="text" placeholder='Enter Text' {...register("service",validateschema.servicevalidator)} />
                <span style={{color:"red"}}>
                    {
                        errors.service?.message
                    }
                    </span><br /> <br />
                <label>Any additional comments or suggestions? </label>
                <input type="text" placeholder='Enter Your Suggestion' {...register("improve",validateschema.improvevalidator)} />
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
