import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const PostApiDemo = () => {

    const { register, handleSubmit } = useForm()
    const submithandler = async (data) => {
        console.log(data)
        const res = await axios.post("https://node5.onrender.com/user/user", data);
        console.log(res.data.message)
        if (res.status == 201) {
            alert("data saved...")
        }
    }



    return (
        <div>
            <h1>PostApiDemo</h1>
            <form onSubmit={handleSubmit(submithandler)}>
                <label>Name</label>
                <input type="text" {...register("name")} /> <br />
                <label>Email</label>
                <input type="email" {...register("email")} /> <br />
                <label>age</label>
                <input type="text" {...register("age")} /> <br />
                <label>isActive</label>
                <input type="text" {...register("isActive")} /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
