import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieSearch = () => {
    const [movieData, setmovieData] = useState([])
    const [search, setsearch] = useState("")
    const getMovieData = async () => {
        // const res = await axios.get("http://www.omdbapi.com/?apikey=d45b4aea&s=avatar")
        const res = await axios.get(`http://www.omdbapi.com/?apikey=d45b4aea&s=${search}`)
        console.log(res.data)
        setmovieData(res.data.Search)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Movie-Search</h1>
            
            <input type="text" onChange={(e)=>{setsearch(e.target.value)}}/>
            <button onClick={() => { getMovieData() }}>Get-Movie</button>

            {

                movieData?.map((movie) => {
                    return (
                        <div class="card" style={{width: "18rem;"}}>
                          <Link to={`/moviedetail/${movie.imdbID}`}>  <img src={movie.Poster} /></Link>
                            <li>{movie.Title}</li>
                            <li>{movie.Year}</li>
                            <li>{movie.imdbID}</li>

                        </div>
                    )
                })
            }
        </div>

    )
}
