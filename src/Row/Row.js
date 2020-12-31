import React, { useState,useEffect } from 'react'
import instance from "../instance";
import "./Row.css"
const baseImgUrl = "https://image.tmdb.org/t/p/original";
function Row({title,fetchurl,isLargeRow}) {
const [movies,setMovies] = useState([]);

useEffect(()=>{
    async function fetchdata(){
        const request = await instance.get(fetchurl);
        setMovies(request.data.results)
        return request
    }
    fetchdata();
},[fetchurl]);
    console.log(movies)

    return (
        <div className="row">
           <h2>{title}</h2> 
           <div className="row_posters">
                {movies.map(movie =>(
                    <img
                    key={movie.id}
                    className="row_poster" 
                    src={`${baseImgUrl}${movie.poster_path}`} 
                    alt={movie.name}/>
                ))}
           </div>
        </div>
    )
}

export default Row
