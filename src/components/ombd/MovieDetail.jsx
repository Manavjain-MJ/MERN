import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./movie.css"


export const MovieDetail = () => {
    const [detaildata, setdetaildata] = useState({})
    const id = useParams().id
    const searchdetail = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=d45b4aea&i=${id}`)
        console.log(res)
        setdetaildata(res.data)
    }
    return (
        <div class="main">
            <div class="container">
                {/* <h1>Movie-Detail:{id}</h1> */}
                <button onClick={() => { searchdetail() }}>Details</button>
                <div class="font">
                    <p class="title">{detaildata?.Title}</p>
                    <img class="poster" src={detaildata?.Poster} />
                    <p>Actors:{detaildata?.Actors}</p>
                    <p>BoxOffice:{detaildata?.BoxOffice}</p>
                    <p>Country:{detaildata?.Country}</p>
                    <p>Director:{detaildata?.Director}</p>
                    <p>Language:{detaildata?.Language}</p>
                    <p>Plot:{detaildata?.Plot}</p>
                    <p>Production:{detaildata?.Production}</p>
                    <p class="time">Runtime:{detaildata?.Runtime}</p>
                    <p>Type:{detaildata?.Type}</p>
                    <p>Writer:{detaildata?.Writer}</p>
                    <p>Year:{detaildata?.Year}</p>
                </div>
            </div>

        </div>

    )
}
