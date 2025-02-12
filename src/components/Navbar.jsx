import React from 'react'
import "../assets/navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/movies">Movie</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/formdemo1">Formdemo1</Link>
                    </li> <li class="nav-item">
                        <Link class="nav-link" to="/formdemo2">Formdemo2</Link>
                    </li> <li class="nav-item">
                        <Link class="nav-link" to="/formdemo3">Formdemo3</Link>
                    </li> <li class="nav-item">
                        <Link class="nav-link" to="/formdemo4">Formdemo4</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
