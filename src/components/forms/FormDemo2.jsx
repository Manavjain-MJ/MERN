import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register, handleSubmit} = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form Demo 2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='enter name' {...register("name")} />
                    <label>TRANSPORT</label>
                    Train:<input type="radio" value="train" name='train' {...register("transport")} />
                    Flight:<input type="radio" value="flight" name='flight' {...register("transport")} />
                    Bus:<input type="radio" value="bus" name='bus' {...register("transport")} /><br></br>
                    <label>Choice</label><br />
                    20km<input type="checkbox" value="20km" {...register("choice")} />
                    Swimming<input type="checkbox" value="swimming" {...register("choice")} />
                    Return<input type="checkbox" value="return" {...register("choice")} />
                    <br />
                    <label>City</label>
                    <select {...register("city")}>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                    </select>
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}
