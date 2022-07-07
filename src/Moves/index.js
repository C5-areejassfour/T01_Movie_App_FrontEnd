import "./style.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a
import axios from "axios";

const Movies = () => {
  const history = useNavigate();
  const [movies, setMovies] = useState("");
  const [page, setPage] = useState(1);



  const GitAllMoves = () => {
    console.log( `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&language=en-US&${page}`);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${page}`

      )
      .then((result) => {
        
        setMovies([...movies,...result.data.results]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GitAllMoves();
  }, [page]);
console.log(movies);
  return (
  <div >

      <h1 className="h1">Movies</h1>

  <div className="container">
    <div className="ss">

      {movies
        ? movies.map((element, index) => {
            return (
              <div className="mm">
                <div className="poster">
                  <Link className="Link" to={`/more/${element.id}`}>
                    <img
                      className="imgg"
                      src={`http://image.tmdb.org/t/p/w500/${element.poster_path}`}
                    />
                  </Link>
                </div>
                <div>
                  <h6 className="title">{element.original_title}</h6>

                  
                  <p className="p">{element.overview}</p>
                  <div className="span">
                  <span className="p1">{element.release_date}</span>
                  <span className="p1">{element.popularity}Votes</span>
                  </div>
                  
                </div>
              </div>
            );
          })
        : []}
    </div>
    
</div>
<button className="export" onClick={(e) => {
         setPage(page+1)
         GitAllMoves()
         console.log(page)
        
        }} >Explore More Movies</button>
    </div>

  );
};
export default Movies;
