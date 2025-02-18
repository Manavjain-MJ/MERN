import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const [detaildata, setdetaildata] = useState({})
    const id =useParams().id
    const searchdetail=async()=>{
    const res =await axios.get(`http://www.omdbapi.com/?apikey=d45b4aea&i=${id}`)
    console.log(res)
    setdetaildata(res.data)
}
    return (
        <div style={{textAlign:"center"}}>
            <h1>Movie-Detail:{id}</h1>
            <button onClick={()=>{searchdetail()}}>Details</button>
            <h1>Name:{detaildata?.Title}</h1>
        </div>

    )
}
