import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {
    return (
        <div style={{ backgroundColor: "blueviolet", textAlign: "center", height: "500px" }}>
            <h1>Movies.........</h1>
            <ul>
                <li>
                    <Link to="/play/suits">Suits</Link>
                </li>
                <li>
                    <Link to="/play/from">From</Link>
                </li>
                <li>
                    <Link to="/play/19020">Pushpa</Link>
                </li>
            </ul>
        </div>
    )
}
