import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo8 = () => {
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
        severityvalidator: {
            required: {
                value: true,
                message: "*Severity level is required"
            }
        },
        issuevalidator: {
            required: {
                value: true,
                message: "*Description of issue is required"
            }
        },
        reproducevalidator: {
            required: {
                value: true,
                message: "*Steps to Reproduce is required"
            }
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Bug Report Form</h1> <br /> <br />
            <form onSubmit={handleSubmit(submithandler)}>
                <label>Reporter Name:</label>
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
                <label>Bug Severity</label>
                <select {...register("severity", validateschema.severityvalidator)}>
                    <option value="">Select</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="neutral">Neutral</option>
                    <option value="critical">Critical</option>
                </select>
                <span style={{ color: "red" }}>
                    {
                        errors.severity?.message
                    }
                </span>
                <br /> <br />
                <label >Describe the Issue</label>
                <input type="text" placeholder='Enter Issue Description' {...register("issue", validateschema.issuevalidator)} />
                <span style={{ color: "red" }}>
                    {
                        errors.issue?.message
                    }
                </span>
                <br /> <br />
                <label>Steps to Reproduce </label>
                <input type="text" placeholder='Enter Your Steps' {...register("reproduce", validateschema.reproducevalidator)} />
                <span style={{ color: "red" }}>
                    {
                        errors.reproduce?.message
                    }
                </span>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
