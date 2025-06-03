import React from "react";
import '../styles.css';


export default function Header(){
    return(
        <div className="header">
            <h1>Movie App</h1>
            <img className="logo" src="logo.png" alt="moviedux" />
            <h2 className="app-subtitle">It's time for popcorn! Find your next movie here.</h2> 
        </div>
    )
}

