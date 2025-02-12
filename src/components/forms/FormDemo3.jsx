import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

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
                    <label>FOOD-PREF</label>
                    Veg:<input type="radio" value="veg" name='veg' {...register("fpref")} />
                    NON-Veg:<input type="radio" value="non-veg" name='non-veg' {...register("fpref")} /><br></br>
                    <label>toppings</label><br />
                    Chesse<input type="checkbox" value="chesse" {...register("choice")} />
                    Sezwan<input type="checkbox" value="sezwan" {...register("choice")} />
                    onion<input type="checkbox" value="onion" {...register("choice")} />
                    <br />
                    <input type="submit" />
                </div>

            </form>
        </div>
    )
}
