import React from "react";
import "./Movie.css";
import { Link} from "react-router-dom" 

function Movie({id,year,title,summary,poster,genres}) {  // home.js에서 받은 props를 state로 쓴다.
    return(
        <Link to={{
            pathname : "/movie/${id}",
            state : {
                
                year : year,
                title : title,
                summary : summary,
                poster : poster,
                genres : genres,    
            }}}>
    <div className = "movie">
        <img src={poster} alt={title} title={title} />
        <div className ="movie_data">
        <h3 className = "movie__title" style={{backgroundColor: "red"}}>{title}</h3>
        <h5 className = "movie__year">{year}</h5>
        <ul className ="genres">{genres.map((genre,index) => <li key={index} className="genres__genre">{genre}</li>)} </ul>
        <p className="movie__summary">{summary}</p>
    
        </div>
    </div>
    </Link> );
}
export default Movie;