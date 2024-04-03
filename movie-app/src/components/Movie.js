import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Movie(){

    const [movieList, setMovieList] = useState([]);

    const getMovie = () =>{
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=61ff0cec6a2b6307cab2c3c7b1957809")
            .then(response => {
                setMovieList(response.data.results);
            })
            .catch(error => {
                console.error('There was a problem fetching the movies:', error);
            });
    }

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <div>
            {movieList.map((movie) => (
                <img style={{width:"300px", height:"250px", marginLeft: "10px", marginTop:"10px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            ))}
        </div>
    )
}

export default Movie;