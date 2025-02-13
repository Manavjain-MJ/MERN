import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    const validationschema = {
        nameValidator: {
            required: {
                value: true,
                message: "*Name is required"
            }
        },
        departmentValidator: {
            required: {
                value: true,
                message: "*Department is required"
            }

        },
        challengevalidator: {
            required: {
                value: true,
                message: "*Exprienced challange is required"
            }
        },
        improvevalidator: {
            required: {
                value: true,
                message: "*Suggestions to improve is required"
            }
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Employee Feedback Form</h1> <br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>Employee Name:</label>
                <input type="text" placeholder='Enter Employee Name' {...register("name", validationschema.nameValidator)} />
                <span style={{ color: "red" }}>{
                    errors.name?.message
                }</span>
                <br /><br />
                <label>Department</label>
                <select {...register("department", validationschema.departmentValidator)}>
                    <option value="">Select Department</option>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                    <option value="marketing">MARKETING</option>
                </select>
                <span style={{ color: "red" }}>{
                    errors.department?.message
                }</span>
                <br /> <br />
                <label >Overall Job Satisfaction:</label>
                <b>1</b><input type="range" id="satisfaction" name="satisfaction" min="1" max="10" {...register("satisfaction")} /><b>10</b><br /> <br />
                <label>Biggest Workplace Challenge:</label>
                <input type="text" placeholder='Enter Biggest Challenge' {...register("challenge", validationschema.challengevalidator)} />
                <span style={{ color: "red" }}>{
                    errors.challenge?.message
                }</span>
                <br /><br />
                <label>Suggestions for Improvement </label>
                <input type="text" placeholder='Enter Your Suggestion' {...register("improve", validationschema.improvevalidator)} />
                <span style={{ color: "red" }}>
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
