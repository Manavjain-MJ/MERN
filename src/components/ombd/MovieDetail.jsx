import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./movie.css"


export const MovieDetail = () => {
    const [detaildata, setdetaildata] = useState({})
    const [showdata, setshowdata] = useState(false)
    const id = useParams().id
    const searchdetail = async () => {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=d45b4aea&i=${id}`)
        console.log(res)
        setdetaildata(res.data)
        setshowdata(true)
    }
    useEffect(()=>{
        searchdetail()
    },[])
    return (
        <div class="main">
            <div class="container">
                {/* <h1>Movie-Detail:{id}</h1> */}
                {/* <button onClick={() => { searchdetail() }}>Details</button> */}
                <div class="font">
                    <p class="title">{detaildata?.Title}</p>
                    <p>{detaildata?.imdbRating}</p>
                    <div class="time">
                    <p >{detaildata?.Runtime}</p>
                    <p>{detaildata?.Language}</p> 
                    </div>
                    
                    <img class="poster" src={detaildata?.Poster} />
                    <p class="genre">{detaildata?.Genre}</p>
                    <p class="detail">{detaildata?.Plot}</p>
                    <p class="detail">Actors:{detaildata?.Actors}</p>
                    <p class="detail">BoxOffice:{detaildata?.BoxOffice}</p>
                    <p class="detail">Country:{detaildata?.Country}</p>
                    <p class="detail">Director:{detaildata?.Director}</p>
                    <p class="detail">Production:{detaildata?.Production}</p>
                    <p class="detail">Type:{detaildata?.Type}</p>
                    <p class="detail">Writer:{detaildata?.Writer}</p>
                    <p class="detail">Year:{detaildata?.Year}</p>
                </div>
            </div>

        </div>

    )
}
